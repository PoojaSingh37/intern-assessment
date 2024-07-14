import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesRequest } from "../actions/services";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const sortedServices = [...services].sort(
    (a, b) => a.service_order - b.service_order
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div
        className="custom-html bg-[url('/public/header.jpg')] bg-right bg-no-repeat"
        style={{ height: '400px', width: '100%', backgroundSize: '70%' }}
      >
        <h2 className="text-yellow-500 text-sm sm:text-lg md:text-xl">SERVICES</h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-4xl">
          At <span className="text-blue-500">NAXA</span>, we work on
          <span className="text-blue-500">ideas</span>; ideas that can provide
          <span className="text-blue-500">simple solutions</span> to
          <span className="text-blue-500">complex problems</span>.
        </h3>
        <p className="text-lg sm:text-xl leading-tight mt-5 max-w-3xl">
          We work as a team to generate, explore, build and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </p>
      </div>
      <div className="bg-gray-200 mt-8 p-4 sm:p-6 lg:p-8">
        {sortedServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isImageLeft={service?.service_order % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};
