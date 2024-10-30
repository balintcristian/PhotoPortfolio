import Icon from "@/components/atoms/Icon/Icon";

type IconLinkProps = {
  url: string;
  text: string;
  name: "facebook" | "instagram" | "phone";
};
const IconLink = ({ url, text, name }: IconLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon name={`${name}`} width={16} height={16} />
      {text}
    </a>
  );
};

export default IconLink;
