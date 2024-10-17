import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <a href="/">Home</a>
        <a href="/about-me">About me</a>
        <a href="/contact">Contact</a>
      </ul>
    </div>
  );
};

// after merge with main branch from last pull request, this will be usable a mistake was made on the commit: 669721eb13066f1284653959651fc3411ac1de1d
// and it had to be reverted

// import data from "../../../../public/assets/json/NavLinks.json";

// import NavLinkList from "@/components/molecules/NavLinkList/NavLinkList";

// import styles from "./Navbar.module.scss";

// const Navbar = () => {
//   return (
//     <div className={styles.navbar}>
//       <NavLinkList data={data} />
//     </div>
//   );
// };
export default Navbar;
