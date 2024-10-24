import Icon from "@/components/atoms/Icon/Icon";

import styles from "./IconLink.module.css";

type IconLinkProps = {
  url: string;
  text: string;
  IconAlt: string;
  IconSrc: string;
};

const IconLink = ({ url, text, IconAlt, IconSrc }: IconLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon src={IconSrc} alt={IconAlt} />
      {text}
    </a>
  );
};

export default IconLink;
