import Image from "next/image";

type GalleryImageProps = {
  src: string;
  description?: string;
};

const GalleryImage = ({ src, description }: GalleryImageProps) => {
  return (
    // <div>
    <Image
      src={src}
      alt="nature"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "100%" }}
    />
    // {description && <p>{description}</p>}</div>
  );
};

export default GalleryImage;
