import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex w-full h-[6rem] justify-between items-center px-[10%] bg-blue-300">
        <Link href={"/"}>
          <Image className="w-full h-full" src={"/carefinderlogo.png"} alt="logo" width={80} height={40} priority />
        </Link>

        <nav className="flex space-x-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/upload"}>About</Link>
          <Link href={"/favourites"}>Get Started</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>

        <nav className="flex gap-6 items-center">
          <Link href={"/login"}>Login</Link>
          <Link href={"/sign-up"}>Sign Up</Link>
        </nav>
      </header>
    </>
  );
}