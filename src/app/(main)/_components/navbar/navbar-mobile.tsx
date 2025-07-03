import React from "react";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
type ModeToggleProps = ComponentProps<typeof Button>;

export default function NavbarMobile({
  className,
  variant = "ghost",
  size = "icon",
}: ModeToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          className={cn("border", className)}
          size={size}
          asChild
        >
          <IoMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border z-[999]">
        <DropdownMenuItem asChild>
          <Link href={"/works"}>Works & Experience</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={"https://github.com/bagasdwirachmad/portofolio"}
            className="flex items-center gap-1"
            target="_blank"
          >
            <IoLogoGithub /> Source
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
