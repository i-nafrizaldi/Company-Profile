import CardPeople from "@/app/components/CardPeople";
import { getTestimoni } from "@/app/components/getTestimoni";
import { appConfig } from "@/utils/config";

const { baseUrl } = appConfig;

const Testi = () => {
  const testis = getTestimoni();

  return (
    <div className="container mx-auto my-8">
      <h1 className="my-11 text-center text-3xl font-extrabold md:mt-16 md:p-5 md:text-center md:text-5xl">
        Testimonials
      </h1>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-3  ">
        {testis.map((testi, index) => {
          return (
            <CardPeople
              key={index}
              imageUrl={`${testi.imageUrl}`}
              name={`${testi.name}`}
              positions={`${testi.testi}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testi;
