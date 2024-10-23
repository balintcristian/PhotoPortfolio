import Heading from "@/components/atoms/Heading/Heading";
import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import styles from "./page.module.scss";
// type ContactProps={}

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Heading headingSize={2} text={"Career"} />
      <Paragraph text={"Lorem ipsum estum mortem"} />
    </div>
  );
};

export default Contact;
