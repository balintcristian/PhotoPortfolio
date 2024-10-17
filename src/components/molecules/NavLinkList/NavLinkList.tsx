import NavLink from "@/components/atoms/NavLink/NavLink";

type NavLinkData = {
  href: string;
  text: string;
};

type NavLinkListProps = {
  data: NavLinkData[];
};
const NavLinkList = ({ data }: NavLinkListProps) => {
  return (
    <ul>
      {data?.map((item) => (
        <NavLink href={item?.href} text={item?.text} />
      ))}
    </ul>
  );
};

export default NavLinkList;
