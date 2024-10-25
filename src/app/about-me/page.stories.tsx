import { Meta, StoryObj } from "@storybook/react";
import Page from "./page";

const meta = {
  title: "pages/about-me",
  component: Page,
  tags: ["!autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
