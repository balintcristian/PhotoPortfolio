import data from "../../../../public/assets/json/NavLinks.json";

import NavLinkList from "@/components/molecules/NavLinkList/NavLinkList";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLinkList data={data} />
    </div>
  );
};
export default Navbar;
