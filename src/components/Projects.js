import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const theme = useSelector(state => state.dark);
  const [selectedCategory, setSelectedCategory] = useState("전체");

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
      bgLight: "bg-[#91D3B1]",
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
            <ul className="flex justify-end space-x-2 relative">
              <li onClick={() => setSelectedCategory("전체")} className="after:w-14 after:absolute after:h-[2px] after:bg-[#C7E8CF] after:bottom-[-4px] after:right-0">전체</li>
              <li onClick={() => setSelectedCategory("팀 프로젝트")}>팀프로젝트</li>
              <li onClick={() => setSelectedCategory("개인 프로젝트")}>개인프로젝트</li>
              <li onClick={() => setSelectedCategory("클론코딩")}>클론코딩</li>
            </ul>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              type: 'fraction',
              el : ".swiper-pagination-fractions"
            }}
            modules={[Autoplay, Pagination]}
            id="swiper"
            breakpoints={{
              768: {
                slidesPerView: 1,  
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 2, 
                spaceBetween: 30
              },
            }}
          >
            {
              ProjectList.filter(project => selectedCategory === "전체" || project.type === selectedCategory).map((e,i)=>{
                return(
                  <SwiperSlide key={i}>
                    <div className="w-full bg-white h-auto dark:bg-[#5c5c5c] border dark:border-none">
                      <div>
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
                          <div className="flex space-x-5 py-5">
                            {
                              Buttons.map((el,index)=>{
                                const link = el.text === '사이트바로가기' ? e.web : e.github
                                return(
                                  <a key={index} href={link} target="_blank" rel="noopener noreferrer" className={`px-5 py-1 w-auto cursor-pointer ${theme === "dark" ? el.bgDark : el.bgLight} rounded-md`}>
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
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <div className="swiper-pagination-fractions"></div>
        </div>
        <img className="w-full lg:pt-12 md:pt-10 pt-5" src={theme === 'light' ?
          "./../Images/wave.svg"
          :
          "./../Images/dark_wave.svg"
        }
         alt="wave" />
      </div>
    </>
  );
}

export default Projects;
