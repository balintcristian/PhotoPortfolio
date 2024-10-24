import type { Meta, StoryObj } from "@storybook/react";

import IconLink from "./IconLink";
import Icon from "@/components/atoms/Icon/Icon";

const meta = {
  title: "molecules/IconLink",
  component: IconLink,
  tags: ["!autodocs"],
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "",
    text: "",
    IconAlt: "",
    IconSrc: "",
  },
};
