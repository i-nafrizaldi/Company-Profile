import layonwhite from "../../public/layonwhite.png";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-[#ea1b28] py-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <div className="flex items-center justify-center md:justify-normal">
          <div className="relative h-[50px] w-[200px]">
            <Image
              src={layonwhite}
              fill
              alt=""
              className="h-full w-full object-scale-down md:object-contain"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between md:justify-normal md:w-full gap-4">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-xl font-bold">Company</h1>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/team">Our Team</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Get in touch</h1>
          <Link href="mailto:layonair@mail.com">Email Us</Link>
          <p>(+62) 869-6969-6969</p>
        </div>
        </div>

        <div className="flex flex-col gap-4 mx-auto md:w-full md:ml-auto md:items-end ">
          <h1 className="text-xl font-bold">Connect with us</h1>
          <div className=" flex flex-row items-center  gap-2">
            <Link href="twitter.com">
              <Twitter className="cursor-pointer" size={35} />
            </Link>
            <Link href="youtube.com">
              <Youtube className="cursor-pointer" size={35} />
            </Link>
            <Link href="facebook.com">
              <Facebook className="cursor-pointer" size={35} />
            </Link>
            <Link href="instagram.com">
              <Instagram className="cursor-pointer" size={35} />
            </Link>
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <p className="mx-auto max-w-[700px] text-pretty px-4 text-center text-sm">
          © 2024 Layonair | Layonair is a trademark owned by PT. PESAT (PT.
          Pemuda Tersesat) Registered at the Directorate General of Intellectual
          Property of the Republic of Indonesia.
        </p>
      </div>
    </div>
  );
};

export default Footer;
