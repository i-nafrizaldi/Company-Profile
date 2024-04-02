import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

interface CardTestimoniProps {
  imageUrl: string;
  name: string;
  testi: string;
}

const CardTestimoni: React.FC<CardTestimoniProps> = ({
  imageUrl,
  name,
  testi,
}) => {
  return (
    <div className="flex h-full flex-row items-center justify-center overflow-hidden text-center shadow-lg drop-shadow-xl md:flex-col">
      <div className="relative mx-auto my-3 h-2 w-2 overflow-hidden rounded-full md:h-48 md:w-48 lg:h-60 lg:w-60">
        <Image
          src={imageUrl}
          alt="sda"
          fill
          className="object-cover"
          loading="lazy"
          quality={70}
        />
      </div>
      <div className="relative h-24 w-full md:h-full md:bg-[#ea1b28] md:text-white lg:h-40">
        <p className="absolute text-center text-lg font-extrabold md:text-xl lg:text-2xl">
          {name}
        </p>
        <Separator />
        <p className="text-center text-sm font-extralight  md:text-sm lg:text-sm">{testi}</p>
      </div>
    </div>
  );
};

export default CardTestimoni;
