import React, { forwardRef, useState } from "react";
import localeData  from './../locales/enkr.json';
import { useSelector } from "react-redux";

function Skills(props, ref){

  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const language = useSelector(state => state.language);
  const messages  = localeData[language];
  const SkillList = messages.skills

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div ref={ref} className="w-full lg:pt-24 md:pt-16 pt-10 lg:pb-28 md:pb-16 pb-10 dark:bg-[#292929]">
        <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
          <div className="text-xl">
            <p>&#60;Skills &#47;&#62;</p>
          </div>
          <div className="pt-20">
            <div className="flex items-start">
              <div className="basis-[15%] sticky top-[68px]">
                <ul className="flex flex-col space-y-5">
                  {
                    SkillList.map((e, i) => {
                      return(
                        <li key={i}>
                          <div className={`${selectedCategory === e.category
                                ? "bg-[#C8E9D8] dark:bg-[#5c5c5c]"
                                : "bg-gray-200 dark:bg-gray-700"
                            } lg:w-40 lg:h-40 md:w-32 md:h-32 w-28 h-28 rounded-full flex justify-center items-center cursor-pointer`}
                            onClick={() => handleCategoryChange(e.category)}>
                            <p className="lg:text-xl md:text-lg text-base font-bold text-center">
                              {e.category}
                            </p>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="basis-[85%]">
                <ul className="flex flex-wrap lg:pl-10 md:pl-6 pl-5">
                  {
                    SkillList.filter((e) => e.category === selectedCategory).map((filteredItem) => {
                      return(
                        filteredItem.items.map((el, index) => {
                          return(
                            <li key={index} className="basis-full lg:basis-[30%] md:basis-[47%] border border-gray-300 p-4 m-2 rounded dark:bg-gray-600 dark:border-none flex flex-col justify-center items-center">
                              <img className="w-24 h-24" src={el.src} alt={el.alt} />
                              <p className="pt-2">{el.txt}</p>
                            </li>
                          )
                        })                 
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Skills);
