import Image from "next/image";

import styles from "./Icon.module.css";
import Phone from "@/components/atoms/svg/phone-solid.svg";
import Facebook from "@/components/atoms/svg/facebook-brands-solid.svg";
import Instagram from "@/components/atoms/svg/instagram-brands-solid.svg";

const IconTypes = {
  phone: Phone,
  facebook: Facebook,
  instagram: Instagram,
};

type IconProps = {
  name: keyof typeof IconTypes;
  [key: string]: any;
};
const Icon = ({ name, ...props }: IconProps) => {
  let Icon = IconTypes[name];
  return <Icon {...props} />;
};

export default Icon;
