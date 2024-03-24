import Image from "next/image";
import { CardWithForm } from "./components/CardWithForm";
import RightSection from "./components/RightSection";

const Contact = () => {
  return (
    <div className="mt-4">
      <div className=" items-center space-y-2">
        <div className="relative h-[600px] w-full overflow-hidden ">
          <Image
            src="https://images.unsplash.com/photo-1583202075405-8d68e5ba459b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Layonair Image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0  bg-black opacity-50"></div>
          <div className="absolute inset-x-0 bottom-20 flex items-center justify-center text-5xl font-black text-white">
            Contact Us
          </div>
        </div>
      </div>
      <div className="container mx-auto p-5 py-8">
        <div className="justify center grid grid-cols-3">
          {/* Left */}
          <div className="col-span-2">
            <CardWithForm />
          </div>

          {/* Right */}
          <div>
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
