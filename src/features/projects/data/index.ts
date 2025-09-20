import { ProjectData } from "../types";
import projectsDataJson from "./projectsData.json";

type RawProject = Omit<ProjectData, "status"> & { status: string };

const normalizeStatus = (status: string): ProjectData["status"] => {
  switch (status) {
    case "completed":
    case "in-progress":
    case "planned":
      return status;
    default:
      return "completed";
  }
};

export const projects: ProjectData[] = (projectsDataJson.projects as RawProject[]).map((p) => ({
  ...p,
  status: normalizeStatus(p.status),
}));
