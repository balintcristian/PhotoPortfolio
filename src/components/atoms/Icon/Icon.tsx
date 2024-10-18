import Image from "next/image";

import styles from "./Icon.module.scss";

type IconProps = {
  src: string;
  alt: string;
};

const Icon = ({ src, alt }: IconProps) => {
  return <Image aria-hidden src={src} alt={alt} width={16} height={16} />;
};

export default Icon;
