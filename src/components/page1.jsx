import React from "react";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

export default function Page1() {
  return (
    <div className=" w-full pl-12 pr-12 pt-8 mb-6">
      <h1 className="font-inter text-2xl font-semibold mb-5 mt-14">
        Welcome, Himanshu Gupta!!
      </h1>
      <div className="flex gap-6">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
}
