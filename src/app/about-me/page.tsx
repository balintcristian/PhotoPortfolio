import Heading from "@/components/atoms/heading/heading";
import Paragraph from "@/components/atoms/paragraph/paragraph";
import styles from "./page.module.scss";
// type AboutMeProps = {};

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <Heading headingSize={2} text={"About me"} />
      <Paragraph text={"Lorem ipsum estum mortem"} />
    </div>
  );
};

export default AboutMe;
