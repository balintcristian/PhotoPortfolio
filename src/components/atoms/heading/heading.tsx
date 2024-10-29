import { createElement } from "react";
import styles from "./Heading.module.css";
type HeadingProps = {
  headingSize: number;
  text: string;
};
const Heading = ({ headingSize, text }: HeadingProps) => {
  return createElement(`h${headingSize}`, { className: `h${headingSize}` }, text);
};
export default Heading;
