import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Airblock</span>,
  project: {
    link: "https://github.com/airblockai/sdk",
  },
  chat: {
    link: "https://discord.com",
  },
  footer: {
    text: "Airblock INC", // change
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s",
      };
    }
  },
};

export default config;
