import IconLink from "@/components/molecules/IconLink/IconLink";
import styles from "./Footer.module.css";
import { playFair } from "@/app/layout";

const Footer = () => {
  return (
    <div className={`${styles.footer} ${playFair.className}`}>
      <IconLink url={"https://instagram.com/domnul"} text={"Instagram"} name={"instagram"} />
      <IconLink url={"https://facebook.com/domnul"} text={"Facebook"} name={"facebook"} />
      <IconLink url={"http://127.0.0.1:3000/contact"} text={"contact me"} name={"phone"} />
    </div>
  );
};

export default Footer;
