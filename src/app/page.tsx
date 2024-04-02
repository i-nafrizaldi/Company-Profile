import { Separator } from "@/components/ui/separator";
import { TestTubeIcon } from "lucide-react";
import Image from "next/image";
import Testi from "./components/Testi";

export default function Home() {
  return (
    <main className="mt-4">
      <div className="items-center space-y-2">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Layonair Image"
            fill
            className="object-cover"
            loading="lazy"
            quality={70}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-x-0 bottom-14 flex items-center justify-center text-3xl font-extrabold text-white md:bottom-28 md:text-5xl">
            Company Overview
          </div>
        </div>
      </div>

      <section className="container mx-auto items-center space-y-4 py-6 text-center">
        <h1 className="mx-auto max-w-[700px] text-lg font-extrabold md:text-2xl">
          Learn more about our history, our business and sustainability
          initiatives
        </h1>
        <p className="px-5 text-sm tracking-wider md:text-base">
          Established in 1996, LayonAir has since emerged as a prominent player
          in the aviation industry, providing reliable and efficient air travel
          services. Headquartered in Yogyakarta, Indonesia, LayonAir operates as
          a subsidiary under{" "}
          <span className="font-semibold italic">
            PT. Pemuda Tersesat (PT. PESAT Group)
          </span>
          , offering domestic and international flight routes. With a commitment
          to excellence and a focus on customer satisfaction, LayonAir has built
          a reputation for punctuality, affordability, and comfort, catering to
          the diverse needs of travelers across Indonesia and beyond. Through
          strategic expansion and continuous innovation, LayonAir continues to
          elevate the standards of air travel, striving to make every journey a
          seamless and enjoyable experience for its passengers.
        </p>
      </section>
      <Testi />
    </main>
  );
}
