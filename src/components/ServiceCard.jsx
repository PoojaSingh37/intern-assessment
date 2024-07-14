import React from "react";
import { ParseHTML } from "./ParseHTML";
export const ServiceCard = ({ service, isImageLeft }) => {

  return (
    <div className="flex flex-col md:flex-row  md:items-center p-4 mb-4">
      <div 
        className={`flex justify-center sm:items-center  md:w-1/2 ${
          isImageLeft ? "md:order-1" : "md:order-2"
        } mb-4 md:mb-0`}
      >
        <img
          src={service?.id === 4 || 3 ? service.icon : service.photo}
          alt={service.title}
          className="object-cover rounded-lg"
          style={{ minHeight: "480px", minWidth: "480px",maxHeight:"771px" }}
        />
      </div>
      <div
        className={`flex flex-col justify-center sm:items-center  md:w-1/2 ${
          isImageLeft ? "md:order-2" : "md:order-1"
        } px-8 bg-[url('/public/bg.svg')]`}
      >
        <img
          src={service?.id === 4 || 3 ? service.photo : service.icon}
          alt={service.title}
          className="mb-4 h-16 w-16"
        />
        <h3 className="text-3xl font-bold mb-5 sm:text-center">{service.title}</h3>
        {service?.description1 ? (
          <div className="mb-4">{ParseHTML(service.description1)}</div>
        ) : null}
        {service?.description2 ? (
          <div className="bg-blue-100 p-2.5 rounded text-base sm:text-center">
            {ParseHTML(service.description2)}
          </div>
        ) : null}
      </div>
    </div>
  );
};
