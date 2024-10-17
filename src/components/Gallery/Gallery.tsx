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
// feature developed on wrong branch, usable after main pulls changes from Atomization branch, mistake on commit:669721eb13066f1284653959651fc3411ac1de1d
// <GalleryImage src={`/assets/images/a.jpg`} description={"test"} />
// <GalleryImage src={`/assets/images/b.jpg`} description={""} />
// <GalleryImage src={`/assets/images/c.jpg`} description={"test3"} />
// <GalleryImage src={`/assets/images/d.jpg`} description={""} />
// <GalleryImage src={`/assets/images/e.jpg`} description={""} />
// <GalleryImage src={`/assets/images/f.jpg`} description={""} />
// <GalleryImage src={`/assets/images/g.jpg`} description={"salut ma numesc fotograful"} />
// <GalleryImage src={`/assets/images/h.jpg`} description={""} />
// <GalleryImage src={`/assets/images/i.jpg`} description={""} />

export default Gallery;
