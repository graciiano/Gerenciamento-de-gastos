import Image, { StaticImageData } from "next/image";

interface ImageProps {
  alt: string;
  caption?: string;
  src: string | StaticImageData;
}

export default function ImagensOtimizadas({ ...ImageProps }: ImageProps) {
  return (
    <Image
      src={ImageProps.src}
      alt={ImageProps.alt}
      width={600}
      height={250}
      objectFit="cover"
      quality={75}
      className="object-center rounded-lg"
      aria-describedby="caption"
    />
  );
}
