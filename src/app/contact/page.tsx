import Heading from "@/components/atoms/heading/heading";
import Paragraph from "@/components/atoms/paragraph/paragraph";
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
