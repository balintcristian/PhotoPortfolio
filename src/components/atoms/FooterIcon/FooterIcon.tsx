import Image from "next/image";

type FooterIconProps = {
  src: string;
  alt: string;
};

const FooterIcon = ({ src, alt }: FooterIconProps) => {
  return <Image aria-hidden src={src} alt={alt} width={16} height={16} />;
};

export default FooterIcon;
