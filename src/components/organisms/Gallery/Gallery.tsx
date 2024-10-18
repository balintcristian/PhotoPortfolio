import GalleryImage from "@/components/molecules/GalleryImage/GalleryImage";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.list}>
      <GalleryImage src={`/a.jpg`} description={"test"} />
      <GalleryImage src={`/b.jpg`} />
      <GalleryImage src={`/c.jpg`} description={"test3"} />
      <GalleryImage src={`/d.jpg`} />
      <GalleryImage src={`/e.jpg`} />
      <GalleryImage src={`/f.jpg`} />
      <GalleryImage src={`/g.jpg`} description={"salut ma numesc fotograful"} />
      <GalleryImage src={`/h.jpg`} />
      <GalleryImage src={`/i.jpg`} />
    </div>
  );
};

export default Gallery;
