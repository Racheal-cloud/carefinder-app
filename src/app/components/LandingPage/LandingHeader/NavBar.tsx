"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../UI/Button";
import NavLink from "../../UI/NavLink";
import classes from "./LandingHeader.module.css";
import Link from "next/link";
// import logo from "../../../public/images/carefinderlogo.png";
const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <header className={classes.header} id="header">
      <Link href="/" className="cursor-pointer">
        {/* <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
          className="cursor-pointer"
        /> */}
      </Link>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <NavLink href={{ pathname: "/" }}>Home</NavLink>
        </li>{" "}
        <li className={classes.li}>
          <NavLink href={{ pathname: "/about" }}>About</NavLink>
        </li>
      </ul>
      <nav className={classes.nav}>
        <Button
          type="button"
          className={classes.header__button}
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>
        <Button
          type="button"
          className={classes.header__button}
          onClick={() => {
            router.push("/signup");
          }}
        >
          Signup
        </Button>
      </nav>
    </header>
  );
};
export default NavBar;