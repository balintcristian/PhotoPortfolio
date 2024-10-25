import NavLink from "@/components/atoms/NavLink/NavLink";

import { navLinks } from "@/static/json/Links.json";

import styles from "./NavLinkList.module.css";

type NavLinkListProps = {
  className?: "w300" | "w600" | "w900";
};
const NavLinkList = ({ className }: NavLinkListProps) => {
  return (
    <ul className={`${styles.list} ${styles[`${className}`]}`}>
      {navLinks?.map((item, idx) => (
        <NavLink href={item?.href} text={item?.text} key={idx} />
      ))}
    </ul>
  );
};

export default NavLinkList;
