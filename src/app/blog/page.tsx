import PageTitle from "@/components/PageTitle";
export const metadata = {
  title: "Blog-beratgdlk",
};
export { default } from "@/features/blog";

export function BlogHead() { return <PageTitle kind="blog" />; }
