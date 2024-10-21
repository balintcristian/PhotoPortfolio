import NavLink from "@/components/atoms/NavLink/NavLink";

import { navLinks } from "@/static/json/Links.json";

import styles from "./NavLinkList.module.scss";

const NavLinkList = () => {
  return (
    <ul>
      {navLinks?.map((item, idx) => (
        <NavLink href={item?.href} text={item?.text} key={idx} />
      ))}
    </ul>
  );
};

export default NavLinkList;
