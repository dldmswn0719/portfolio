import React, { forwardRef, useState } from "react";

const Skills = forwardRef((props, ref) => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const SkillList = [
    {
      category: 'frontend',
      items: [
        {src:'./../Images/HTML.svg', alt:"HTML" , txt : "웹 표준과 접근성 지침을 준수하여 다양한 웹 페이지를 구축할 수 있습니다."},
        {src:'./../Images/CSS.svg', alt:"CSS" , txt : " 다양한 스타일링 기법과 선택자를 사용하여 웹 페이지의 디자인과 레이아웃을 구현할 수 있습니다."},
        {src:'./../Images/Javascript.svg', alt:"Javascript" , txt : "javascript의 DOM 조작과 이벤트 처리 등의 핵심 개념에 익숙합니다. ES6이상의 문법을 활용할 수 있습니다."},
        {src:'./../Images/Scss.svg', alt:"Scss" , txt : "CSS의 가독성을 높이고, 유지보수에 용이하게 SCSS를 작성할 수 있습니다. 변수, 믹스인, 중첩 등을 적극 활용하여 스타일링을 효율적으로 구성할 수 있습니다."},
        {src:'./../Images/Styled-components.svg', alt:"Styled-components" , txt : "컴포넌트의 레이아웃을 구성할 수 있고 컴포넌트에 props 전달을 통해 스타일을 동적으로 변경할 수 있습니다."},
        {src:'./../Images/Tailwind_CSS.svg', alt:"Tailwind_CSS" , txt : "반응형 웹 디자인을 구현할 수 있습니다. 유틸리티 클래스를 사용하여 모바일, 태블릿, 데스크톱 등 다양한 디바이스에 맞춘 레이아웃을 빠르게 제작할 수 있습니다."},
        {src:'./../Images/NEXT.js.svg', alt:"NEXT.js" , txt : "기본적인 기능을 이해하고 있으며, 서버 사이드 렌더링(SSR)의 개념을 알고 있습니다. 간단한 프로젝트에서 Next.js를 활용한 경험이 있으며, 필요에 따라 추가적인 학습을 통해 더 깊이 있는 활용이 가능하다는 자신감을 가지고 있습니다."},
        {src:'./../Images/React.svg', alt:"React" , txt : "컴포넌트 재사용성을 극대화하여 코드의 효율성을 높이고 다양한 React Hooks를 사용할 수 있습니다."},
        {src:'./../Images/TS.svg', alt:"TS" , txt : "TypeScript를 활용하여 자바스크립트 코드에 타입을 명시적으로 적용할 수 있습니다. 이를 통해 코드의 안정성을 높이고, 예상치 못한 오류를 사전에 방지할 수 있습니다."}
      ],
    },
    {
      category: 'backend, database',
      items: [
        { src: './../Images/node.js.svg', alt: 'node.js' , txt : "비동기 I/O 처리를 이해하고 있으며, 간단한 백엔드 로직을 구현하는데 필요한 기본적인 Node.js 기능을 사용할 수 있습니다."},
        { src: './../Images/mongoDB.svg', alt: 'mongoDB' , txt : "간단한 데이터 조작을 위한 CRUD 연산을 수행할 수 있으며, MongoDB를 활용한 데이터 관리의 기본적인 방법을 숙지하고 있습니다."},
        { src: './../Images/Firebase.svg', alt: 'Firebase' , txt : "Google의 Firebase를 활용하여 실시간 데이터베이스와 사용자 인증 등의 백엔드 서비스를 간편하게 이용할 수 있습니다. 이를 통해 애플리케이션의 개발 시간을 단축하고 효율적으로 관리할 수 있습니다."},
        { src: './../Images/MySQL.svg', alt: 'MySQL' , txt : "기본적인 SQL 문법을 이해하고 간단한 데이터 조작과 조회를 할 수 있습니다. 또한, 웹 애플리케이션과 데이터베이스를 연동하는 방법에 대한 이해가 있습니다. 이를 바탕으로 필요한 데이터를 추출하고 사용할 수 있습니다."},
      ],
    },
    {
      category: 'etc',
      items: [
        { src: './../Images/figma.svg', alt: 'figma' , txt : "사용자 중심의 UI/UX 디자인을 구현할 수 있습니다."},
        { src: './../Images/github.svg', alt: 'github' , txt : "소스 코드의 버전 관리를 체계적으로 수행할 수 있습니다. 브랜치를 통한 작업 분리, 풀 리퀘스트를 통한 코드 리뷰 등을 통해 팀 프로젝트의 효율성을 높일 수 있습니다. 소프트웨어 개발 프로세스를 관리할 수 있습니다."},
        { src: './../Images/notion.svg', alt: 'notion' , txt : "Notion을 활용하여 문서화를 진행할 수 있습니다."},
        { src: './../Images/vercel.svg', alt: 'vercel' , txt : "지속적인 통합(Deployment)과 배포를 경험하였습니다. 프로젝트의 변경 사항을 실시간으로 반영하여 웹사이트를 유지보수하며 웹 애플리케이션을 배포하고 관리할 수 있습니다."},
        { src: './../Images/yarn.svg', alt: 'yarn' , txt : "Yarn을 통한 패키지 관리에 능숙합니다. 의존성 관리와 버전 관리를 효율적으로 진행함으로써 프로젝트의 안정성을 유지할 수 있습니다. "}
      ],
    }
  ]

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
});

export default Skills;
