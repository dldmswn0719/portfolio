import React from "react";
import Wave_c from "./Wave_c";

function Main() {
  return (
    <>
      <div className="w-full relative h-[calc(100vh-74px)] overflow-hidden">
        <div className="relative flex max-w-7xl mx-auto px-5 z-20">
            <div className="after:w-[5px] after:h-64 after:absolute after:bg-[#C8E9D8] lg:after:left-0 lg:after:top-48 after:left-6 after:top-48"></div>
            <div className="absolute lg:top-56 lg:left-20 top-56 left-14">
                <p className="lg:text-[50px] text-[40px] font-bold">FRONTEND DEVELOPER</p>
                <p className="lg:text-[50px] text-[40px] font-bold">PORTFOLIO</p>
                <p className="lg:text-[20px] text-[17px]">안녕하세요 : &#41; 신입 프론트엔드 개발자 이은주입니다.</p>
            </div>
        </div>
        <Wave_c />
      </div>
    </>
  );
}

export default Main;
