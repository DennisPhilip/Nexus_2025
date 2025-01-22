"use client";

import React from "react";

import { companies} from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
    

      <div className="flex flex-col items-center max-lg:mt-10">
        

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
              <p className="text-3xl text-gray-800 font-semibold hover:text-indigo-600 hover:scale-110 transition-all duration-300 ease-in-out">
                {company.name}
              </p>
               </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;