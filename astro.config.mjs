import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://polymeer.xyz",
  output: "static",
  integrations: [
    starlight({
      title: "My Docs",
      customCss: ["./src/tailwind.css"],
      social: {
        twitter: "https://x.com/polymeer_xyz",
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: {
            directory: "introduction",
          },
        },
        {
          label: "Background",
          autogenerate: {
            directory: "reference",
          },
        },
        {
          label: "Knowledge Base",
          autogenerate: {
            directory: "knowledge-base",
          },
        },
        {
          label: "About Us",
          autogenerate: {
            directory: "about-us",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
