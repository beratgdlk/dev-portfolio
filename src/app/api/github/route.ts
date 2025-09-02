import { NextResponse } from 'next/server';

// App Router API Route - GitHub GraphQL proxy
// Token sadece sunucu tarafında kullanılır

const GET_USER_REPOSITORIES = `
  query GetUserRepositories($login: String!, $first: Int!, $after: String) {
    user(login: $login) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            id
            name
            nameWithOwner
            description
            url
            homepageUrl
            isPrivate
            isFork
            isArchived
            primaryLanguage { name color }
            repositoryTopics(first: 20) { nodes { topic { name } } }
            stargazerCount
            forkCount
            createdAt
            updatedAt
            pushedAt
            defaultBranchRef { target { ... on Commit { committedDate message author { name date } } } }
          }
        }
      }
      repositories(first: $first, after: $after, orderBy: {field: PUSHED_AT, direction: DESC}, ownerAffiliations: [OWNER]) {
        pageInfo { hasNextPage endCursor }
        nodes {
          id
          name
          nameWithOwner
          description
          url
          homepageUrl
          isPrivate
          isFork
          isArchived
          primaryLanguage { name color }
          repositoryTopics(first: 20) { nodes { topic { name } } }
          stargazerCount
          forkCount
          createdAt
          updatedAt
          pushedAt
          defaultBranchRef { target { ... on Commit { committedDate message author { name date } } } }
        }
      }
    }
  }
`;

export async function POST(request: Request) {
  try {
    const { username, first = 50, after } = await request.json();

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return NextResponse.json({ error: 'Missing GITHUB_TOKEN' }, { status: 401 });
    }

    const upstream = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'dev-portfolio-app'
      },
      body: JSON.stringify({
        query: GET_USER_REPOSITORIES,
        variables: { login: username, first, after }
      })
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


