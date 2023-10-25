import React, { useState } from "react";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const SkillList = [
    {
      category: 'frontend',
      items: [
        {src:'./../Images/HTML.svg', alt:"HTML"},
        {src:'./../Images/CSS.svg', alt:"CSS"},
        {src:'./../Images/Javascript.svg', alt:"Javascript"},
        {src:'./../Images/Scss.svg', alt:"Scss"},
        {src:'./../Images/Styled-components.svg', alt:"Styled-components"},
        {src:'./../Images/Tailwind_CSS.svg', alt:"Tailwind_CSS"},
        {src:'./../Images/NEXT.js.svg', alt:"NEXT.js"},
        {src:'./../Images/React.svg', alt:"React"},
        {src:'./../Images/TS.svg', alt:"TS"}
      ],
    },
    {
      category: 'backend, database',
      items: [
        { src: './../Images/node.js.svg', alt: 'node.js' },
        { src: './../Images/mongoDB.svg', alt: 'mongoDB' },
        { src: './../Images/Firebase.svg', alt: 'Firebase' },
        { src: './../Images/MySQL.svg', alt: 'MySQL' },
      ],
    },
    {
      category: 'etc',
      items: [
        { src: './../Images/figma.svg', alt: 'figma' },
        { src: './../Images/github.svg', alt: 'github' },
        { src: './../Images/notion.svg', alt: 'notion' },
        { src: './../Images/vercel.svg', alt: 'vercel' },
        { src: './../Images/yarn.svg', alt: 'yarn' }
      ],
    }
  ]

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="w-full py-28 dark:bg-[#292929]">
        <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
          <div className="text-xl">
            <p>&#60;Skills &#47;&#62;</p>
          </div>
          <div className="pt-20">
            <div className="flex">
              <ul className="flex flex-col space-y-5">
                {
                  SkillList.map((e, i) => {
                    return(
                      <li key={i}>
                        <div className={`${selectedCategory === e.category
                              ? "bg-[#C8E9D8] dark:bg-[#5c5c5c]"
                              : "bg-gray-200 dark:bg-gray-700"
                          } lg:w-40 lg:h-40 md:w-32 md:h-32 w-24 h-24 rounded-full flex justify-center items-center cursor-pointer`}
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
              <ul className="flex flex-wrap pl-5">
                {
                  SkillList.filter((e) => e.category === selectedCategory).map((filteredItem) => {
                    return(
                      filteredItem.items.map((el, index) => {
                        return(
                          <li key={index} className="h-[200px] border-2 border-gray-300 p-4 m-2 rounded dark:bg-gray-600 dark:border-none">
                            <img className="w-24 h-24" src={el.src} alt={el.alt} />
                            <p className="pt-2">구현가능 정도</p>
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
    </>
  );
}

export default Skills;
