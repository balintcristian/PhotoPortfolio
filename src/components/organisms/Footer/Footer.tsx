import { footerLinks } from "@/static/json/Links.json";

import IconLink from "@/components/molecules/IconLink/IconLink";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <IconLink
        url={footerLinks[0].href}
        text={footerLinks[2].text}
        IconAlt={"Instagram Icon"}
        IconSrc={"https://nextjs.org/icons/file.svg"}
      />
      <IconLink
        url={footerLinks[1].href}
        text={footerLinks[1].text}
        IconAlt={"Facebook Icon"}
        IconSrc={"https://nextjs.org/icons/window.svg"}
      />
      <IconLink
        url={footerLinks[2].href}
        text={footerLinks[2].text}
        IconAlt={"Contact Icon"}
        IconSrc={"https://nextjs.org/icons/globe.svg"}
      />
    </footer>
  );
};

export default Footer;
