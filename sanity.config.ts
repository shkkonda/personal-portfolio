"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { table } from "@sanity/table";
import { schemaTypes } from "@/sanity/schemas";
import { projectId, dataset } from "@/sanity/env";

export default defineConfig({
  name: "shriharsha-portfolio",
  title: "Shriharsha Portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool(), visionTool(), table()],
  schema: {
    types: schemaTypes,
  },
});
