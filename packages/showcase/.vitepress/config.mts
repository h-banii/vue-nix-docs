import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue-nix-docs",
  description: "Documentation",
  base: "/vue-nix-docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        items: [{ text: "NixOS module", link: "/pages/nixos-module" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/h-banii/vue-nix-docs",
      },
    ],
  },
  srcDir: "src",
});
