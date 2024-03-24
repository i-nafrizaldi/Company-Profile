import Image from "next/image";
import React from "react";
import { getRandomPosition } from "../api/getPosition";
import { Separator } from "@/components/ui/separator";

interface CardPeopleProps {
  imageUrl: string;
  name: string;
  positions: string;
}

const CardPeople: React.FC<CardPeopleProps> = ({
  imageUrl,
  name,
  positions,
}) => {
  return (
    <div className="relative mx-auto max-w-xs md:w-[300px] md:max-w-sm lg:max-w-md xl:max-w-lg">
      <div className="flex flex-row items-center justify-center overflow-hidden text-center shadow-lg drop-shadow-xl md:flex-col">
        <div className="relative mx-auto my-3 h-36 w-36 overflow-hidden rounded-full md:h-48 md:w-48 lg:h-60 lg:w-60">
          <Image src={imageUrl} alt="sda" fill className="object-cover" />
        </div>
        <div className="h-24 w-full md:h-32 md:bg-[#ea1b28] md:text-white lg:h-40">
          <div className="flex h-full flex-col justify-center space-y-3 p-3 md:p-4 lg:p-6">
            <p className="text-center text-lg font-bold md:text-xl lg:text-2xl">
              {name}
            </p>
            <Separator />
            <p className="text-center text-base font-bold md:text-lg lg:text-xl">
              {positions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPeople;
