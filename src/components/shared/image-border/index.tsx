import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ImageBorder({ src, alt }: Props) {
  return (
    <div className="relative aspect-video">
      <div className="absolute inset-0 rounded-none border-4 border-black bg-[#B4FF39]"></div>
      <div className="absolute bottom-4 left-4 right-4 top-4 rounded-none border-4 border-black bg-white"></div>
      <div className="absolute bottom-8 left-8 right-8 top-8 rounded-none border-4 border-black bg-[#FFB6E1]">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
