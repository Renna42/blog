import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      description: z.string(),
      canonicalURL: z.string().optional(),
      comment: z.boolean().default(true),
      license: z.string().default("ARR"),
    }),
});

export const collections = { blog };
