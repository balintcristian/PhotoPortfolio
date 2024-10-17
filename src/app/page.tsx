import Gallery from "@/components/organisms/Gallery/Gallery";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Gallery />
    </div>
  );
}
