import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkEmoji from "remark-emoji";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/static";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    compress({
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: false,
        },
      },
    }),
    mdx(),
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
      remarkA11yEmoji,
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  adapter: vercel({
    imageService: true,
  }),
});
