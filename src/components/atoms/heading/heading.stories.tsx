import { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "typography/Heading",
  component: Heading,
  tags: ["!autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingSize: 1,
    text: "Hello i am a heading",
  },
};
