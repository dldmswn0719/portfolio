import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function ProjectsTest() {
  const theme = useSelector(state => state.dark);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const Categories = ["전체", "팀 프로젝트", "개인 프로젝트", "클론코딩"];

  const ProjectList = [
    {
      img: './../Images/puriproject.svg',
      title: 'PURIPURI',
      type: '팀 프로젝트',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '2023.08~10.09',
      skills: 'react, firebase, redux, tailwindcss',
      contribution: '30%',
      web : "https://team-puri.vercel.app/",
      github : "https://github.com/dldmswn0719/Team-Puri"
    },
    {
      img: './../Images/parcel.svg',
      title: 'Parcel',
      type: '개인 프로젝트',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, typescript, tailwindcss',
      contribution: '100%',
      web : "https://parcel-liart-five.vercel.app/",
      github : "https://github.com/dldmswn0719/parcel"
    },
    {
      img: './../Images/quiz.svg',
      title: 'QUIZ',
      type: '개인 프로젝트',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, tailwindcss',
      contribution: '100%',
      web : "https://quiz-sigma-gilt.vercel.app/",
      github : "https://github.com/dldmswn0719/quiz"
    },
    {
      img: './../Images/mcdonald.svg',
      title: 'Mcdonald',
      type: '클론코딩',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, tailwindcss ',
      contribution: '100%',
      web : "https://mc-donald-clone.vercel.app/",
      github : "https://github.com/dldmswn0719/McDonald_clone"
    },
    {
      img: './../Images/subway.svg',
      title: 'Subway',
      type: '클론코딩',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, styled-components',
      contribution: '100%',
      web : "https://react-subway.vercel.app/",
      github : "https://github.com/dldmswn0719/React_subway"
    }
  ]

  const Buttons = [
    {
      icon: faShareFromSquare,
      text: "사이트바로가기",
      bgLight: "bg-[#B6E2CB]",
      bgDark: "dark:bg-[#404343]"
    },
    {
      icon: faGithubAlt,
      text: "Github",
      bgLight: "bg-[#B6E2CB]",
      bgDark: "dark:bg-[#404343]"
    }
  ]
  
  return (
    <>
      <div className="w-full pb-20 dark:bg-[#292929] relative">
        <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
          <div className="text-xl pb-8">
            <p>&#60;Projects &#47;&#62;</p>
          </div>
          <div className="pb-6">
            <ul className="flex space-x-2 relative">
                {
                    Categories.map((e,i)=>{
                        return(
                            <li key={i} onClick={() => setSelectedCategory(e)} className={`cursor-pointer after:absolute after:h-[2px] after:bg-[#C7E8CF] after:bottom-[-4px] after:left-0 after:right-0 relative ${selectedCategory === e ? "after:block" : "after:hidden"}`}>
                                {e}
                            </li>
                        )
                    })
                }
            </ul>
          </div>
          <div className="flex flex-wrap gap-5">
            {
              ProjectList.filter(project => selectedCategory === "전체" || project.type === selectedCategory).map((e,i)=>{
                return(
                    // <div key={i} className="shadow-[0_3px_8px_0_rgba(0,0,0,.15)] basis-full lg:basis-[31.5%] md:basis-[48%] flex bg-white h-auto dark:bg-[#5c5c5c] dark:border-none">
                    <div key={i} className="border basis-full lg:basis-[31.5%] md:basis-[48%] flex bg-white h-auto dark:bg-[#5c5c5c] dark:border-none">
                        <div className="w-full">
                            <img className="w-full" src={e.img} alt={e.title} />
                            <div className="p-5">
                                <ul>
                                    <li className="font-extrabold text-2xl">{e.title}</li>
                                    <li className="text-[#C3C3C3]">{e.type}</li>
                                    <li>{e.desc}</li>
                                    <br />
                                    <li>기간 : {e.duration}</li>
                                    <li>기술 : {e.skills}</li>
                                    <li>기여도 : {e.contribution}</li>
                                </ul>
                                <div className="flex space-x-3 pt-5">
                                    {
                                    Buttons.map((el,index)=>{
                                        const link = el.text === '사이트바로가기' ? e.web : e.github
                                        return(
                                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className={`px-3 py-0.5 w-auto cursor-pointer ${theme === "dark" ? el.bgDark : el.bgLight} rounded-md`}>
                                            <ul className="flex">
                                            <li>
                                                <FontAwesomeIcon icon={el.icon} className="pr-1" />
                                            </li>
                                            <li>
                                                <p>{el.text}</p>
                                            </li>
                                            </ul>
                                        </a>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
              })
            }
                        
          </div>
        </div>
        <img className="w-full lg:pt-20 md:pt-16 pt-14" src={theme === 'light' ?
          "./../Images/wave.svg"
          :
          "./../Images/dark_wave.svg"
        }
         alt="wave" />
      </div>
    </>
  );
}

export default ProjectsTest;
