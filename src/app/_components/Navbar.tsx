import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <nav className="py-6 px-3 sm:px-10 flex justify-between items-center absolute top-0 right-0 left-0 lg:left-[250px] z-10">
      <ul className="flex gap-x-5">
        <li className="text-white cursor-pointer font-semibold tracking-wide">
          <Sheet>
            <SheetTrigger className="text-white">
              <Image
                src="/images/hamburger-menu.svg"
                alt="hamburger_icon"
                width={26}
                height={26}
                className="cursor-pointer lg:hidden"
              />
            </SheetTrigger>

            <SheetContent side="left" className="bg-black w-fit">
              <Sidebar isInsideSheet={true} />
            </SheetContent>
          </Sheet>
        </li>
        <li className="text-white  hidden md:inline-block cursor-pointer font-semibold tracking-wide">
          Movies
        </li>
        <li className="text-white hidden md:inline-block cursor-pointer font-semibold tracking-wide">
          Stories
        </li>
        <li className="text-white hidden md:inline-block cursor-pointer font-semibold tracking-wide">
          Documentaries
        </li>
      </ul>

      <ul className="flex gap-x-5 items-center">
        <li className="cursor-pointer">
          <Image
            src="/images/search.png"
            alt="search_img"
            width={24}
            height={24}
            className="hidden sm:inline-block"
          />
        </li>
        <li className="cursor-pointer">
          <Image
            src="/images/Vector.png"
            alt="search_img"
            width={24}
            height={24}
            className="hidden sm:inline-block"
          />
        </li>
        <li className="cursor-pointer">
          <div className="flex gap-x-2 items-center">
            <Image
              src="/images/Ellipse 757.png"
              alt="search_img"
              width={30}
              height={30}
            />
            <p className="text-white hidden sm:inline-block font-semibold tracking-wide">
              Subhash
            </p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
