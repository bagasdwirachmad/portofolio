import { ModeToggle } from "@/components/mode-toggle";
import { NavbarLink } from "./navbar-link";
import { IoLogoGithub } from "react-icons/io5";
import { NavbarLogo } from "./navbar-logo";
import NavbarMobile from "./navbar-mobile";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[100] overflow-visible">
      <div className="max-w-[768px] mx-auto items-center flex flex-wrap px-4 py-2 justify-between ">
        <div>
          <NavbarLogo/>
        </div>
        <div className="hidden md:flex w-auto mt-0 flex-row items-center gap-4">
          <NavbarLink href={"/works"}>Works & Experience</NavbarLink>
          <NavbarLink href={"https://github.com/bagasdwirachmad/portofolio"} className="flex items-center gap-1" target="_blank">
          <IoLogoGithub /> Source
          </NavbarLink>
        </div>
        <div className="flex items-center gap-4 pr-2">
          <ModeToggle />
          <div className=" md:hidden">
            <NavbarMobile />
          </div>
        </div>
       
      </div>
    </nav>
  );
}
