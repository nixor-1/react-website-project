import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { ProxyOptions, UserConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkBreaks from "remark-breaks";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const proxyConfig: Record<string, ProxyOptions> = {
  "/api": {
    target: "http://localhost:3000",
    changeOrigin: true,
  },
};

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkFrontmatter, remarkBreaks, remarkMdxFrontmatter],
    }),
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: proxyConfig,
  },
} as UserConfig);
