import React from "react";
import styles from "./Gallery.module.scss";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className={styles.list}>
      <Image
        src={`/a.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/b.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />

      <Image
        src={`/c.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/d.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/e.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/f.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/g.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/h.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <Image
        src={`/i.jpg`}
        alt="nature"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Gallery;
