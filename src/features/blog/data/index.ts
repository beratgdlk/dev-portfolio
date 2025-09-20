import type { BlogPost } from "../types";
import blogData from "./blogData.json";

export const blogPosts: BlogPost[] = (blogData.posts as BlogPost[]) ?? [];
