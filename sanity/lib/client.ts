import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/sanity/env";

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
