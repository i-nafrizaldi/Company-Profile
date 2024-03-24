import Image from "next/image";
import React from "react";

const ContentA = () => {
  return (
    <div className="mx-auto flex flex-col space-y-5 text-center md:flex-row md:space-x-5 md:space-y-0">
      <h1 className="text-3xl font-bold md:hidden md:text-5xl">
        World Class Services
      </h1>
      <div className="relative h-[400px] w-full md:h-[700px] md:w-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1615561776627-449e68725b57?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cargo services"
          fill
          className="object-cover"
        />
      </div>
      <div className="mx-auto w-full space-y-8 md:w-[500px]">
        <h1 className="hidden md:block text-3xl font-bold md:text-5xl">
          World Class Services
        </h1>
        <p className="text-base md:text-lg">
          At Layon Air, we are committed to providing exceptional services that
          enhance your flying experience. From seamless global flights to the
          expertise of our skilled pilots and the warm hospitality of our cabin
          crew, every aspect of your journey is meticulously crafted for your
          comfort and satisfaction. Our worldwide flights connect you to
          destinations across the globe, ensuring you arrive at your destination
          safely and on time. Renowned for their proficiency and experience, our
          pilots navigate the skies with precision and expertise, guaranteeing a
          smooth and enjoyable flight. Meanwhile, our friendly cabin crew,
          trained to provide attentive care and assistance, ensure that your
          onboard experience is nothing short of delightful. Additionally, we
          take pride in our disability-friendly services, striving to
          accommodate the needs of all passengers with utmost respect and care.
          At Layon Air, your journey is not just a flight, but an extraordinary
          experience designed to exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default ContentA;
