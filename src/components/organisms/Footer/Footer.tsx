import IconLink from "@/components/molecules/IconLink/IconLink";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <IconLink
        url={"https://instagram.com/domnul"}
        text={"Instagram"}
        IconAlt={"Instagram Icon"}
        IconSrc={"https://nextjs.org/icons/file.svg"}
      />
      <IconLink
        url={"https://facebook.com/domnul"}
        text={"Facebook"}
        IconAlt={"Facebook Icon"}
        IconSrc={"https://nextjs.org/icons/window.svg"}
      />
      <IconLink
        url={"http://127.0.0.1:3000/contact"}
        text={"contact me"}
        IconAlt={"Contact Icon"}
        IconSrc={"https://nextjs.org/icons/globe.svg"}
      />
    </footer>
  );
};

export default Footer;
