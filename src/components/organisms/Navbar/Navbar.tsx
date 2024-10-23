import NavLinkList from "@/components/molecules/NavLinkList/NavLinkList";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLinkList />
    </div>
  );
};
export default Navbar;
