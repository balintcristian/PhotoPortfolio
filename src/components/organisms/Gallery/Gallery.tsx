import GalleryImage from "@/components/molecules/GalleryImage/GalleryImage";

import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.list}>
      <GalleryImage src={`/assets/images/a.jpg`} description={"test"} />
      <GalleryImage src={`/assets/images/b.jpg`} />
      <GalleryImage src={`/assets/images/c.jpg`} description={"test3"} />
      <GalleryImage src={`/assets/images/d.jpg`} />
      <GalleryImage src={`/assets/images/e.jpg`} />
      <GalleryImage src={`/assets/images/f.jpg`} />
      <GalleryImage src={`/assets/images/g.jpg`} description={"salut ma numesc fotograful"} />
      <GalleryImage src={`/assets/images/h.jpg`} />
      <GalleryImage src={`/assets/images/i.jpg`} />
    </div>
  );
};

export default Gallery;
