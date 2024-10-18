import styles from "./GalleryImage.module.scss";

type GalleryImageProps = {
  src: string;
  description?: string;
};

const GalleryImage = ({ src, description }: GalleryImageProps) => {
  return (
    <div className={styles.GalleryImage}>
      <img src={src} alt={"nature"} sizes="100vw" />
      {description && <p>{description}</p>}
    </div>
  );
};

export default GalleryImage;
