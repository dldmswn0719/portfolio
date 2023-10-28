import React, { useEffect, useState } from "react";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const SkillList = [
    {
      category: 'frontend',
      items: [
        {src:'./../Images/HTML.svg', alt:"HTML" , txt : "마크업"},
        {src:'./../Images/CSS.svg', alt:"CSS" , txt : "프로젝트의 디자인에 알맞은 스타일을 적용할 수 있습니다."},
        {src:'./../Images/Javascript.svg', alt:"Javascript" , txt : "javaScript 문법에 대한 이해를 바탕으로 적절한 로직을 구현 할 수 있습니다. ES6이상의 문법을 활용할 수 있습니다."},
        {src:'./../Images/Scss.svg', alt:"Scss" , txt : "CSS의 가독성을 높이고, 유지보수에 용이하게 SCSS를 작성할 수 있습니다."},
        {src:'./../Images/Styled-components.svg', alt:"Styled-components" , txt : "컴포넌트의 레이아웃을 구성할 수 있고 컴포넌트에 props 전달을 통해 스타일을 동적으로 변경할 수 있습니다."},
        {src:'./../Images/Tailwind_CSS.svg', alt:"Tailwind_CSS" , txt : "마크업"},
        {src:'./../Images/NEXT.js.svg', alt:"NEXT.js" , txt : "마크업"},
        {src:'./../Images/React.svg', alt:"React" , txt : "컴포넌트의 재사용성을 고려해 컴포넌트를 구현할 수 있습니다. 다양한 React Hooks를 사용할 수 있습니다."},
        {src:'./../Images/TS.svg', alt:"TS" , txt : "TypeScript를 사용하여 원하는 기능을 사용할 수 있습니다."}
      ],
    },
    {
      category: 'backend, database',
      items: [
        { src: './../Images/node.js.svg', alt: 'node.js' , txt : "마크업"},
        { src: './../Images/mongoDB.svg', alt: 'mongoDB' , txt : "마크업"},
        { src: './../Images/Firebase.svg', alt: 'Firebase' , txt : "마크업"},
        { src: './../Images/MySQL.svg', alt: 'MySQL' , txt : "마크업"},
      ],
    },
    {
      category: 'etc',
      items: [
        { src: './../Images/figma.svg', alt: 'figma' , txt : "마크업"},
        { src: './../Images/github.svg', alt: 'github' , txt : "마크업"},
        { src: './../Images/notion.svg', alt: 'notion' , txt : "마크업"},
        { src: './../Images/vercel.svg', alt: 'vercel' , txt : "마크업"},
        { src: './../Images/yarn.svg', alt: 'yarn' , txt : "마크업"}
      ],
    }
  ]

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="w-full lg:pt-24 md:pt-16 pt-10 lg:pb-28 md:pb-16 pb-10 dark:bg-[#292929]">
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
                            } lg:w-40 lg:h-40 w-32 h-32 rounded-full flex justify-center items-center cursor-pointer`}
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
                <ul className="flex flex-wrap pl-10">
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
}

export default Skills;
