"use client";

import { useLanguage } from "@/hooks";
import { useEffect } from "react";

interface PageTitleProps { kind: "home" | "blog" | "projects" | "about" }

export default function PageTitle({ kind }: PageTitleProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const map = {
      home: t.pageTitleHome,
      blog: t.pageTitleBlog,
      projects: t.pageTitleProjects,
      about: t.pageTitleAbout,
    } as const;
    const title = map[kind];
    if (typeof document !== "undefined") {
      document.title = title;
    }
  }, [language, t, kind]);

  return null;
}


