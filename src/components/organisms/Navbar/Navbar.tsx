import NavLinkList from "@/components/molecules/NavLinkList/NavLinkList";
import styles from "./Navbar.module.css";
import { hind } from "@/app/layout";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${hind.className}`}>
      <NavLinkList />
    </div>
  );
};
export default Navbar;
