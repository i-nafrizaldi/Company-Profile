import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import OurLeadership from "./components/OurLeadership";
import OurTeam from "./components/OurTeam";

const Team = () => {
  return (
    <div className="mt-4">
      <div className=" items-center space-y-2">
        <div className="relative h-[600px] w-full overflow-hidden ">
          <Image
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Layonair Image"
            fill
            className="object-cover"
            loading="lazy"
              quality={70}
          />
          <div className="absolute inset-0  bg-black opacity-50"></div>
          <div className="absolute inset-x-0 bottom-20 flex flex-col items-center justify-center gap-4 ">
            <h1 className="text-center text-5xl font-black text-white">
              Our People
            </h1>
            <p className="max-w-3xl text-center text-lg text-white px-4">
              Our talented and dedicated workforce joined us from over 160
              nations from around the world, bringing their expertise and
              diverse experiences to deliver the best products and services for
              our global customer base.
            </p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 lg:px-0">
        {/* CARD PEOPLE */}
        <OurLeadership />
        {/* <OurLeadershipCarousel/> */}

        <Separator />

        {/* Leadership */}
        <OurTeam />
      </section>
    </div>
  );
};

export default Team;
