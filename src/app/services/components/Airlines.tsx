import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const Airlines = () => {
  return (
    <div className="mt-32 flex flex-col gap-8">
      <h1 className="text-center text-5xl font-bold">Our Airline</h1>
      <Card className=" mx-auto flex flex-col gap-4 p-4 shadow-lg drop-shadow-xl md:w-[900px] md:flex-row">
        <p className=" text-center text-2xl font-bold text-red-500 md:hidden">
          Antonov An-225
        </p>
        <CardHeader className="relative mx-auto my-auto h-[250px] w-[250px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1699546217400-3f79abdaf8bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFudG9ub3Z8ZW58MHx8MHx8fDA%3D%3D"
            alt="sda"
            fill
            className="object-cover"
          />
        </CardHeader>
        <CardContent className=" space-y-3 text-left md:w-[700px]">
          <p className=" hidden text-2xl font-bold text-red-500 md:block">
            Antonov An-225
          </p>
          <Separator />
          <p className=" text-lg">
            The legendary Antonov An-225, the world's largest cargo aircraft, is
            the top choice for transporting large and heavy cargo worldwide.
          </p>
          <ul className="ml-5 list-disc">
            <li>Layon Air has 1 Antonov An-225 aircraft.</li>
            <li>
              The Antonov An-225 has an immense cargo capacity, with the
              capability to transport up to 250 tons of cargo load.
            </li>
            <li>Cruise speed : 800 Km per hour</li>
            <li>Length : 84 m</li>
            <li>Wingspan : 88,4 m</li>
          </ul>
        </CardContent>
      </Card>
      <Card className=" mx-auto flex flex-col gap-4 p-4 shadow-lg drop-shadow-xl md:w-[900px] md:flex-row">
        <p className=" md:hidden text-center text-2xl font-bold text-red-500">
          Airbus A380
        </p>
        <CardHeader className="relative mx-auto my-auto h-[250px] w-[250px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542450358-d9a5550f504c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFpcmJ1cyUyMGEzODB8ZW58MHx8MHx8fDI%3D"
            alt="sda"
            fill
            className="object-cover"
          />
        </CardHeader>
        <CardContent className=" space-y-3 text-left md:w-[700px]">
          <p className=" hidden text-2xl font-bold text-red-500 md:block">
            Airbus A380
          </p>
          <Separator />
          <p className=" text-lg">
            The Airbus A380 is the world's largest double-deck passenger
            aircraft, designed to provide comfort and efficiency on long-haul
            flights.
          </p>
          <ul className="ml-5 list-disc">
            <li>Layon Air has 10 Airbus A380 aircraft.</li>
            <li>
              The Airbus A380 has a passenger capacity of up to 850 passengers
            </li>
            <li>Cruise speed : 900 Km per hour</li>
            <li>Range : 15.000 Km</li>
            <li>Length : 73 m</li>
            <li>Wingspan : 80 m</li>
          </ul>
        </CardContent>
      </Card>
      <Card className=" mx-auto flex flex-col gap-4  p-4 shadow-lg drop-shadow-xl md:w-[900px] md:flex-row">
        <p className=" text-center text-2xl font-bold text-red-500 md:hidden">
          Boeing 777
        </p>
        <CardHeader className="relative mx-auto my-auto h-[250px] w-[250px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvZWluZyUyMDc3N3xlbnwwfHwwfHx8MA%3D%3D"
            alt="sda"
            fill
            className="object-cover"
          />
        </CardHeader>
        <CardContent className=" space-y-3 text-left md:w-[700px]">
          <p className=" hidden text-2xl font-bold text-red-500 md:block">
            Boeing 777
          </p>
          <Separator />
          <p className=" text-lg">
            The Boeing 777 is a long-range, wide-body aircraft known for its
            fuel efficiency and passenger comfort.
          </p>
          <ul className="ml-5 list-disc">
            <li>Layon Air has 48 Boeing-777 aircraft.</li>
            <li>
              The Boeing 777 has a passenger capacity of up to 396 passengers
            </li>
            <li>Cruise speed : 905 Km per hour</li>
            <li>Range : 15.000 Km</li>

            <li>Length : 63,7 m</li>
            <li>Wingspan : 64,8 m</li>
          </ul>
        </CardContent>
      </Card>
      <Card className=" mx-auto flex flex-col gap-4  p-4 shadow-lg drop-shadow-xl md:w-[900px] md:flex-row">
        <p className=" text-center text-2xl font-bold text-red-500 md:hidden">
          Boeing 737-900ER
        </p>
        <CardHeader className="relative mx-auto my-auto h-[250px] w-[250px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1566827371384-24bf42497a19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGJvZWluZyUyMDczN3xlbnwwfHwwfHx8MA%3D%3D"
            alt="sda"
            fill
            className="object-cover"
          />
        </CardHeader>
        <CardContent className=" space-y-3 text-left md:w-[700px]">
          <p className=" hidden text-2xl font-bold text-red-500 md:block">
            Boeing 737-900ER
          </p>
          <Separator />
          <p className=" text-lg">
            The Boeing 737-900ER is a versatile narrow-body aircraft, recognized
            for its efficiency, extended range, and reliable performance in
            various operating conditions.
          </p>
          <ul className="ml-5 list-disc">
            <li>Layon Air has 117 Boeing 727-900ER aircraft.</li>
            <li>
              The Boeing 737-900ER has a passenger capacity of up to 215
              passengers
            </li>
            <li>Cruise speed : 890 Km per hour</li>
            <li>Range : 5.900 Km</li>
            <li>Length : 42,1 m</li>
            <li>Wingspan : 35,8 m</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Airlines;
