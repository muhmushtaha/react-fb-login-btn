import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import FacebookLoginButton from "../FacebookLoginButton";
import React from 'react'

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

// Custom className story
export const CustomClassName: Story = {
  args: {
    className: "w-[400px] py-4",
  },
};

// Custom icon story
export const CustomIcon: Story = {
  args: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="#fff" d="M25 3C12.862 3 3 12.862 3 25c0 11.02 8.128 20.138 18.713 21.729l1.148.173V29.566h-5.197v-3.52h5.197v-4.673c0-2.878.691-4.774 1.834-5.963 1.144-1.19 2.833-1.789 5.184-1.789 1.88 0 2.611.114 3.307.2v2.88h-2.448a3.59 3.59 0 0 0-3.119 1.807c-.591 1.032-.775 2.264-.775 3.52v4.017h6.123l-.545 3.52h-5.578V46.93l1.135-.155C38.714 45.32 47 36.127 47 25c0-12.138-9.862-22-22-22zm0 2c11.058 0 20 8.942 20 20 0 9.73-6.964 17.732-16.156 19.533V31.564h5.293l1.162-7.52h-6.455v-2.017c0-1.037.19-1.967.51-2.525.32-.558.628-.8 1.384-.8h4.448V12.01l-.868-.117c-.6-.082-1.969-.272-4.44-.272-2.702 0-5.022.736-6.624 2.402-1.602 1.666-2.393 4.147-2.393 7.35v2.674h-5.197v7.52h5.197V44.47C11.817 42.555 5 34.624 5 25 5 13.942 13.942 5 25 5z" style={{ mixBlendMode: 'normal' }} transform="scale(5.12)" /></svg>,
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
