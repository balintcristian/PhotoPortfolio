import styles from "./GalleryImage.module.css";

type GalleryImageProps = {
  src: string;
  description?: string;
};

const GalleryImage = ({ src, description }: GalleryImageProps) => {
  return (
    <div className={styles.galleryImage}>
      <img src={src} alt={"nature"} sizes="100vw" />
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default GalleryImage;
