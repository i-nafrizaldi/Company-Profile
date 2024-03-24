import Image from "next/image";
import layonaircrop from "../../public/Layoncrop.png";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="container sticky top-0 z-10 mx-auto bg-white">
      <div className="flex items-center justify-between py-1 md:py-2">
        <div className="flex items-center gap-3">
          <Link href="/" className="relative flex h-14 w-40 md:h-14 md:w-60 ">
            <Image
              src={layonaircrop}
              fill
              alt=""
              className="cursor-pointer object-scale-down md:object-cover "
            />
          </Link>
          <div className="hidden pt-9 md:block">
            <p className="pt-auto font-extrabold italic text-[#ea1b28]">
              We make people delay
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex  items-center gap-4">
            <Link
              className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
              href="/team"
            >
              Our Team
            </Link>
            <Link
              className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/about">
                <DropdownMenuItem>About Us</DropdownMenuItem>
              </Link>
              <Link href="/services">
                <DropdownMenuItem>Services</DropdownMenuItem>
              </Link>
              <Link href="/team">
                <DropdownMenuItem>Our Team</DropdownMenuItem>
              </Link>
              <Link href="/contact">
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
