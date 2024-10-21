import NavLink from "@/components/atoms/NavLink/NavLink";

import styles from "./NavLinkList.module.scss";

type NavLinkData = {
  href: string;
  text: string;
};

type NavLinkListProps = {
  NavLinkData: NavLinkData[];
};
const NavLinkList = ({ NavLinkData }: NavLinkListProps) => {
  return (
    <ul>
      {NavLinkData?.map((item, idx) => (
        <NavLink href={item?.href} text={item?.text} key={idx} />
      ))}
    </ul>
  );
};

export default NavLinkList;
