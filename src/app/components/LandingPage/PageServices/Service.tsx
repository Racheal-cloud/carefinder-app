import React from "react";
// import classes from "./Service.module.css";

interface Props {
  icon: JSX.Element;
  name: string;
  description: string;
}
const Service: React.FC<Props> = ({ icon, name, description }) => {
  return (
    <div className="flex-[0_0_22%] p-8 bg-white text-blue-500 flex flex=col justify-center rounded-[1.5rem]items-center"id="service__item">
      <div className="w-24 h-24 fill-blue-500">{icon}</div>
      <h3 className="font-bold text-[1.7rem] mt-[1.5rem] mb-[2.5rem] tracking-[0.1rem]">{name}</h3>
      <p className="font-semibold text-[1.1rem] tracking-[0.1rem] align-center">{description}</p>
    </div>
  );
};

export default Service;