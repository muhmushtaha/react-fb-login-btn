import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FacebookLoginButton from "../FacebookLoginButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/FacebookLoginButton",
  component: FacebookLoginButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    shape: {
      control: {
        type: "select",
        options: ["rectangular", "circle"],
      },
    },
    direction: {
      control: {
        type: "select",
        options: ["ltr", "rtl"],
      },
    },
    theme: {
      control: {
        type: "select",
        options: ["blue", "dark", "light", "custom"],
      },
    },
    text: { control: "text" },
    appId: { table: { disable: true } }, // Hide appId from controls
    onSuccess: { action: "onSuccess" }, // Use action to log events
    onFail: { action: "onFail" },
  },
  // Use `action` to spy on the onSuccess and onFail args, which will appear in the actions panel once invoked
  args: {
    appId: "", // Replace with a test App ID or mock
    onSuccess: action("onSuccess"),
    onFail: action("onFail"),
  },
} satisfies Meta<typeof FacebookLoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    // Default args are already defined in meta.args
  },
};

// Rectangular button story
export const Rectangular: Story = {
  args: {
    shape: "rectangular",
  },
};

// Circle button story
export const Circle: Story = {
  args: {
    shape: "circle",
  },
};

// Right-to-left text direction story
export const RTLDirection: Story = {
  args: {
    direction: "rtl",
    text: "الدخول باستخدام فيسبوك",
  },
};

// Custom theme story
export const CustomTheme: Story = {
  args: {
    theme: "custom",
    customTheme: {
      backgroundColor: "bg-green-500",
      textColor: "text-white",
      hoverBackgroundColor: "hover:bg-green-600",
    },
  },
};

// Dark theme story
export const DarkTheme: Story = {
  args: {
    theme: "dark",
  },
};

// Light theme story
export const LightTheme: Story = {
  args: {
    theme: "light",
    text: "Continue with Facebook",
  },
};
