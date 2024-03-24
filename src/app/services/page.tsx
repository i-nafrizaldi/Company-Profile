import Image from "next/image";
import Airlines from "./components/Airlines";
import ContentA from "./components/ContentA";
import ContentB from "./components/ContentB";

const Services = () => {
  return (
    <div className="mt-4">
      {/* HERO */}
      <div className="items-center space-y-2">
        <div className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1628354215124-dd0ab72828ac?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Layonair Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-x-0 bottom-20 flex flex-col items-center justify-center gap-4 text-center text-white">
            <h1 className="text-5xl font-black">Our Services</h1>
            <p className="max-w-[600px] text-lg">
              Layon Air ensures seamless travel and cargo delivery worldwide.
              Experience luxury, safety, and efficiency with our professional
              team. Every journey and shipment is extraordinary with us.
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto mb-8 mt-10 space-y-20">
        {/* ContentA */}
        <ContentA />

        {/* ContentB */}
        <ContentB />

        {/* Airlines */}
        <Airlines />
      </div>
    </div>
  );
};

export default Services;
