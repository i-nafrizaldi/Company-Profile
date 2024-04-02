import { getPeople } from "@/app/api/getPeople";
import { getRandomPosition } from "@/app/api/getPosition";
import CardPeople from "@/app/components/CardPeople";
import { appConfig } from "@/utils/config";

const { baseUrl } = appConfig;

const OurTeam = async () => {
  const peoples = await getPeople();
// console.log(peoples);

  return (
    <div className="my-8">
      <h1 className="p-5 text-center text-5xl font-extrabold">Meet The Team</h1>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3  ">
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
