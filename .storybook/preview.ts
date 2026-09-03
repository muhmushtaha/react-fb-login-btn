import type { Preview } from "@storybook/react";
import React from "react";
import '../src/index.css';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            style: {
              background: "#fff7ed",
              border: "1px solid #fdba74",
              color: "#9a3412",
              padding: "12px 16px",
              fontSize: "14px",
              lineHeight: 1.5,
              textAlign: "center",
            },
          },
          "This package is archived and not recommended for new projects. For new work, prefer ",
          React.createElement(
            "a",
            { href: "https://www.npmjs.com/package/react-facebook" },
            "react-facebook",
          ),
          " or your auth framework's Facebook provider.",
        ),
        React.createElement(
          "div",
          { style: { paddingTop: "16px" } },
          React.createElement(Story),
        ),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
