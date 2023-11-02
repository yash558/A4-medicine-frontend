import React from "react";
import { doctor, nurse, nurse2, student } from "../assets";

const BookUser = () => {
  const user = [
    {
      name1: "General Practitioner",
      name2: "Family Doctor",
      image: doctor,
    },
    {
      name1: "Practice Nurse",
      name2: "Paramedic",
      image: nurse,
    },
    {
      name1: "Medical Student",
      name2: "Resident",
      image: student,
    },
    {
      name1: "Advanced Nurse Practitioner",
      name2: "Family Medicine/GP Trainee",
      image: nurse2,
    },
  ];
  return (
    <div className="bg-[#B1E1FA] h-full w-full py-16">
      <h2 className="text-center text-5xl font-bold">Are You A,</h2>
      <div>
        <div className="flex justify-center items-center my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {user.map((currElem, index) => {
              return (
                <div className="flex flex-col justify-center items-center" key={index}>
                    <h2 className="text-2xl font-bold text-[--main-color]">{currElem.name1}</h2>
                    <img src={currElem.image} alt="" className="" />
                    <h2 className="text-2xl font-bold text-[--main-color]">{currElem.name2}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="text-3xl font-bold my-8 text-center">You are in the right place!</h3>
        <h3 className="text-4xl font-bold my-8 text-center">Unlock the power of knowledge and Excel in Your Practice</h3>
      </div>
    </div>
  );
};

export default BookUser;
