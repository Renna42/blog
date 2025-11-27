import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkEmoji from "remark-emoji";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  prefetch: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    preact(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "目录",
        },
      ],
      [
        remarkEmoji,
        {
          accessible: true,
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow", "noopener", "noreferer"],
          target: "_blank",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  scopedStyleStrategy: "where",
  adapter: vercel({
    imageService: true,
  }),
});