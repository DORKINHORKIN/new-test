import { build } from "bun";

build({
  entrypoints: ["index.ts"],
  outdir: "dist",
  target: "browser",
  minify: true,
  // sourcemap: true,
  splitting: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
