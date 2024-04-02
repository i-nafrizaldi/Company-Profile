import Image from "next/image";
import React from "react";

const ContentB = () => {
  return (
    <div className="mx-auto flex flex-col space-y-5 text-center md:flex-row md:space-x-5 md:space-y-0">
      <h1 className="text-3xl font-bold md:hidden md:text-5xl">
        Cargo Delivery Services
      </h1>
      <div className="relative h-[400px] w-full md:h-[500px] md:w-[500px]">
        <Image
          src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cargo services"
          fill
          className="object-cover"
          loading="lazy"
              quality={70}
        />
      </div>
      <div className="mx-auto w-full space-y-8 md:w-[500px]">
        <h1 className="hidden md:block text-3xl font-bold md:text-5xl">
          Cargo Delivery Services
        </h1>
        <p className="text-base md:text-lg">
          We specialize in providing worldwide air cargo delivery services,
          ensuring swift and reliable shipments to destinations across the
          globe. With our extensive network and advanced logistics capabilities,
          we cater to your air freight needs with efficiency and precision.
          Whether it's urgent supplies, oversized cargo, or time-sensitive
          materials, our team is dedicated to delivering your shipments promptly
          and securely to any corner of the world.
        </p>
      </div>
    </div>
  );
};

export default ContentB;
