import React from "react";
import Image from "next/image";
import classes from "./LeftSide.module.css";
import Button from "../../UI/Button";

const LeftSide = () => {
  const scrollHandler = () => {
    const section = document.querySelector("#services") as HTMLElement;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section id="left__aligned">
      <h1 className={classes.h1}>
        Make a lasting impact on the future of your health
      </h1>
      <li className={classes.leftside}>
        <div className={classes.left}>
          <h2 className={classes.h2}>Welcome to CareFinder</h2>
          <p className={classes.p}>
            Here, we shape the healthcare for millions worldwide.
          </p>
          <p className={classes.p}>
            Carefinder is a platform where users can search for hosiptals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <Button
            type="button"
            className={classes.button}
            onClick={scrollHandler}
          >
            Our services
          </Button>
        </div>
        <figure className={classes.right}>
          <Image
            src="/images/patient.png"
            width={150}
            height={400}
            alt="carefinder"
            style={{ marginBottom: "3rem" }}
          />{" "}
          <Image
            src="/images/doctor.png"
            width={150}
            height={400}
            alt="carefinder"
            style={{ marginTop: "3rem" }}
          />
        </figure>
      </li>
    </section>
  );
};
export default LeftSide;