import GalleryImage from "@/components/molecules/GalleryCard/GalleryCard";

import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.list}>
      <GalleryImage src={`/assets/images/a.jpg`} description={"test"} />
      <GalleryImage src={`/assets/images/b.jpg`} description={""} />
      <GalleryImage src={`/assets/images/c.jpg`} description={"test3"} />
      <GalleryImage src={`/assets/images/d.jpg`} description={""} />
      <GalleryImage src={`/assets/images/e.jpg`} description={""} />
      <GalleryImage src={`/assets/images/f.jpg`} description={""} />
      <GalleryImage src={`/assets/images/g.jpg`} description={"salut ma numesc fotograful"} />
      <GalleryImage src={`/assets/images/h.jpg`} description={""} />
      <GalleryImage src={`/assets/images/i.jpg`} description={""} />
    </div>
  );
};

export default Gallery;
