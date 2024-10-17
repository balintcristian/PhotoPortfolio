import FooterIcon from "@/components/atoms/FooterIcon/FooterIcon";

type FooterIconLinkProps = {
  url: string;
  text: string;
  IconAlt: string;
  IconSrc: string;
};

const FooterIconLink = ({ url, text, IconAlt, IconSrc }: FooterIconLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FooterIcon src={IconSrc} alt={IconAlt} />
      {text}
    </a>
  );
};

export default FooterIconLink;
