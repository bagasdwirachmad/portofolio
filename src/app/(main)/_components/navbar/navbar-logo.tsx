import Link from "next/link";
import { SiThreads } from "react-icons/si";
export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center group">
      <span className="flex items-center">
        <SiThreads className="transition-all duration-300 group-hover:rotate-45" />
        <span className="ml-1 text-lg transition-colors duration-300 group-hover:text-primary">
          bagasdwi
        </span>
      </span>
    </Link>
  );
}
