import React from "react";
import Wave_c from "./Wave_c";
import { useSelector } from "react-redux";
import localeData  from './../locales/enkr.json';

function Main() {

  const language = useSelector(state => state.language);
  const messages  = localeData[language]

  return (
    <>
      <div className="w-full relative h-[calc(100vh-68px)] overflow-hidden dark:bg-[#292929]">
        <div className="relative flex max-w-7xl mx-auto px-5 z-20">
            <div className="sm:after:hidden dark:after:bg-[#696969] after:w-1 after:h-64 after:absolute after:bg-[#C8E9D8] after:left-6 lg:after:top-48 after:top-44"></div>
            <div className="absolute lg:left-20 md:left-14 left-5 top-56">
                <p className="lg:text-6xl md:text-5xl text-4xl font-bold dark:text-[#ebf4f1]">FRONTEND DEVELOPER</p>
                <p className="lg:text-6xl md:text-5xl text-4xl font-bold dark:text-[#ebf4f1]">PORTFOLIO</p>
                <p className="lg:text-xl md:text-lg text-base pt-9 pr-4 dark:text-[#ebf4f1]">{messages.maintitle}</p>
            </div>
        </div>
        <Wave_c />
      </div>
    </>
  );
}

export default Main;
