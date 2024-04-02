import layonwhite from "../../public/layonwhite.png";
import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#ea1b28] px-6 py-6 text-white">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-8 md:gap-0">
        <div className="flex items-center justify-center md:max-w-48 md:justify-normal">
          <div className="relative h-[50px] w-[200px]">
            <Image
              src={layonwhite}
              fill
              alt=""
              className="h-full w-full object-scale-down md:object-contain"
            />
          </div>
        </div>

        <div className="flex flex-row md:col-span-6 md:ml-10 justify-between gap-4 md:gap-10 md:w-full md:mr-40 md:justify-normal">
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

        <div className="mx-auto flex flex-col  gap-2 md:ml-auto md:w-full md:items-end ">
          <h1 className="text-xl font-bold mx-auto">Connect with us</h1>
          <div className=" flex flex-row mx-auto  gap-2">
            <Link href="twitter.com">
              <Twitter className="cursor-pointer" size={25} />
            </Link>
            <Link href="youtube.com">
              <Youtube className="cursor-pointer" size={25} />
            </Link>
            <Link href="facebook.com">
              <Facebook className="cursor-pointer" size={25} />
            </Link>
            <Link href="instagram.com">
              <Instagram className="cursor-pointer" size={25} />
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
