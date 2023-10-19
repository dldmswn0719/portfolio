import React from "react";

function Skills() {

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
      category: 'backend & database',
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
  
  return (
    <>
      <div className="w-full pt-9 h-[calc(100vh-74px)]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-[20px]">
            <p>&#60;Skills &#47;&#62;</p>
          </div>
          <div className="pt-5 space-y-5">
            {
              SkillList.map((e,i)=>{
                return(
                  <ul key={i} className="justify-between flex items-center">
                    <li>
                      <div className="bg-[#C8E9D8] w-[150px] h-[150px] rounded-full flex justify-center items-center">
                        <p className="text-[21px] font-bold">{e.category}</p>
                      </div>
                    </li>
                    {
                      e.items.map((el,index)=>{
                        return(
                          <li key={index}>
                            <img className="w-[90px] h-[90px]" src={el.src} alt={el.alt} />
                          </li>
                        )
                      })
                    }
                  </ul>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
