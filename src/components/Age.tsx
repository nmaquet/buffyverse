import React from "react";

const Age = ({ age }): any => {
  return (
    <div className="flex justify-center">
      <img className="w-6 h-8" src={"src/assets/icons/age.png"} />
      <p className="pl-2 text-3xl text-indigo-950 font-grenze">{age}??</p>
    </div>
  );
};
export default Age;
