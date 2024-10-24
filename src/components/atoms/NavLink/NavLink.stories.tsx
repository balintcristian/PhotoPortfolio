import { Meta, StoryObj } from "@storybook/react";
import NavLink from "./NavLink";

const meta = {
  title: "atoms/NavLink",
  component: NavLink,
  tags: ["!autodocs"],
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/home",
    text: "/home",
  },
};
