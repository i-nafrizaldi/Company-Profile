import { getLeaders } from "@/app/api/getPeople";
import { getLeaderPosition } from "@/app/api/getPosition";
import CardPeople from "@/app/components/CardPeople";
import React from "react";

const OurLeadership = async () => {
  const leaders = await getLeaders();

  return (
    <div className="my-8">
      <h1 className="p-5 text-center text-5xl font-extrabold">
        Our Leadership Team
      </h1>
      <p className="mx-auto text-center md:w-[700px]">
        At the helm of our business, is a stable executive team that has led the
        growth and success of the Layon Air Group. Our executive leaders
        continue to drive innovation and build on our foundations for long-term
        success.
      </p>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3  ">
        {leaders.results.map((leader, index) => {
          const leaders = getLeaderPosition();
          return (
            <CardPeople
              key={index}
              imageUrl={`${leader.picture.large}`}
              name={`${leader.name.first} ${leader.name.last}`}
              positions={leaders}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurLeadership;
