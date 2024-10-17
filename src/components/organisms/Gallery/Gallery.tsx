import GalleryImage from "@/components/molecules/GalleryCard/GalleryCard";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.list}>
      <GalleryImage src={`/a.jpg`} description={"test"} />
      <GalleryImage src={`/b.jpg`} description={""} />
      <GalleryImage src={`/c.jpg`} description={"test3"} />
      <GalleryImage src={`/d.jpg`} description={""} />
      <GalleryImage src={`/e.jpg`} description={""} />
      <GalleryImage src={`/f.jpg`} description={""} />
      <GalleryImage src={`/g.jpg`} description={"salut ma numesc fotograful"} />
      <GalleryImage src={`/h.jpg`} description={""} />
      <GalleryImage src={`/i.jpg`} description={""} />
    </div>
  );
};

export default Gallery;
