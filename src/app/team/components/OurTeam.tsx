import { getPeople } from "@/app/api/getPeople";
import { getRandomPosition } from "@/app/api/getPosition";
import CardPeople from "@/app/components/CardPeople";
import { appConfig } from "@/utils/config";
import React from "react";

const { baseUrl } = appConfig;

const OurTeam = async () => {
  const peoples = await getPeople();
  return (
    <div className="my-8">
      <h1 className="p-5 text-center text-5xl font-extrabold">Meet The Team</h1>
      <div className="mt-10 grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-8  ">
        {peoples.results.map((people, index) => {
          const positions = getRandomPosition();
          return (
            <CardPeople
              key={index}
              imageUrl={`${people.picture.large}`}
              name={`${people.name.first} ${people.name.last}`}
              positions={positions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
