import { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./paragraph";

const meta = {
  title: "typography/Paragraph",
  component: Paragraph,
  tags: ["!autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "I am a paragraph",
  },
};
