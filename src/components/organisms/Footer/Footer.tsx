import FooterIconLink from "@/components/molecules/FooterIconLink/FooterIconLink";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterIconLink
        url={"https://instagram.com/ok"}
        text={"Instagram Page"}
        IconAlt={"Instagram Icon"}
        IconSrc={"https://nextjs.org/icons/file.svg"}
      />
      <FooterIconLink
        url={"https://facebook.com/ok"}
        text={"Facebook Page"}
        IconAlt={"Facebook Icon"}
        IconSrc={"https://nextjs.org/icons/window.svg"}
      />
      <FooterIconLink
        url={"/contact"}
        text={"Get in touch with me"}
        IconAlt={"Contact Icon"}
        IconSrc={"https://nextjs.org/icons/globe.svg"}
      />
    </footer>
  );
};

export default Footer;
