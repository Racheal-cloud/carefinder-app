import React from "react";
import { FaUserNurse, FaRegHospital, FaFileExport } from "react-icons/fa";
import Service from "./Service";
import { SlShareAlt } from "react-icons/sl";
// import classes from "./Services.module.css";

const offers = [
  {
    name: "Search Doctors",
    description: "Effortlessly Find the Best Doctors Near You",
    icon: <FaUserNurse />,
  },
  {
    description: "Effortlessly Find the Best Hospitals Near You",
    name: "Search Hospitals",
    icon: <FaRegHospital />,
  },
  {
    description: "Save list of hospitals.",
    name: "Export Hospitals",
    icon: <FaFileExport />,
  },
  {
    description: "Share the list of hospitals with others. ",
    name: "Share Hospitals",
    icon: <SlShareAlt />,
  },
];
const Offers = () => {
  return (
    <section className="w-full pt-[4rem] pr=[6rem] pb-[6rem] display-flex flex-col" id="services">
      <div className="mx-auto mb-[4rem]">
        <h1 className="text-center font-bold text-[2.5rem] color-[#225ad6]">See Our Services</h1>
      </div>
      <ul className="mx-auto w-[85%] flex content-between">
        {offers.map((service, index) => (
          <Service
            key={index}
            description={service.description}
            name={service.name}
            icon={service.icon}
          />
        ))}
      </ul>
    </section>
  );
};
export default Offers;