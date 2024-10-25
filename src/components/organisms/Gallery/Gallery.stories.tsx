import type { Meta, StoryObj } from "@storybook/react";

import Gallery from "./Gallery";
import GalleryImage from "@/components/molecules/GalleryImage/GalleryImage";

const meta = {
  title: "organisms/Gallery",
  component: Gallery,
  tags: ["!autodocs"],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <GalleryImage src="" />,
  },
};
