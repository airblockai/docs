import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <strong>airblock</strong>,
  project: {
    link: "https://github.com/airblockai",
  },
  chat: {
    link: "https://discord.gg/9trv5aBegp",
  },
  footer: {
    text: "© airblock Inc.",
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – airblock",
    };
  },
};

export default config;
