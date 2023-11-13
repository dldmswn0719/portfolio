import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { faShareFromSquare, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {ProjectList } from './../data/projectList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects(props, ref){
  const theme = useSelector(state => state.dark);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectSwiper,setSelectSwiper] = useState("박스 보기");
  const language = useSelector(state => state.language);

  const Categories = {
    "en": ["All", "Team Project", "Personal Project", "Clone Coding"],
    "kr": ["전체", "팀 프로젝트", "개인 프로젝트", "클론 코딩"]
  };
  const SwiperCategory = ["슬라이드 보기" , "박스 보기"]

const Buttons = {
  "en": [
    {
      icon: faShareFromSquare,
      text: "Go to Site",
      bgLight: "bg-[#B6E2CB]",
      bgDark: "dark:bg-[#404343]"
    },
    {
      icon: faGithubAlt,
      text: "Github",
      bgLight: "bg-[#B6E2CB]",
      bgDark: "dark:bg-[#404343]"
    }
  ],
  "kr": [
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
};

  const [select, setSelect] = useState('박스 보기');

  return (
    <>
      <div ref={ref} className="w-full pb-20 dark:bg-[#292929] relative">
        <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
          <div className="text-xl pb-8">
            <p>&#60;Projects &#47;&#62;</p>
          </div>
          <div className="pb-6 flex justify-between">
            <ul className="flex space-x-2 relative">
                {
                     Categories[language].map((e,i)=>{
                        return(
                            <li key={i} onClick={() => setSelectedCategory(e)} className={`cursor-pointer after:absolute after:h-[2px] after:bg-[#C7E8CF] after:bottom-0 after:left-0 after:right-0 dark:after:bg-[#5c5c5c] relative ${selectedCategory === e ? "after:block" : "after:hidden"}`}>
                                {e}
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex space-x-2 relative pr-1.5">
              {
                SwiperCategory.map((e,i)=>{
                  return(
                    <React.Fragment key={i}>
                      <li className={`cursor-pointer ${e === select ? 'border-b-2 border-[#C7E8CF] dark:border-[#5c5c5c]' : ''} w-8 h-8 flex justify-center items-center`} onClick={()=>{setSelectSwiper(e);setSelect(e)}}>
                        {
                          e === "슬라이드 보기" ?
                          <img className="w-8 h-8" src={theme === 'light' ? './../Images/slideimg_black.png' : './../Images/slideimg.png'} alt="슬라이드 아이콘" />
                          :
                          <FontAwesomeIcon className="w-[18px] h-[18px]" icon={faTableCellsLarge} />
                        }
                      </li>
                    </React.Fragment>
                  )
                })
              }
            </ul>
          </div>
          {
            selectSwiper === "슬라이드 보기" ?
            <>
              <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              runOnMount: true,
              }}
              pagination={{
              type: "fraction",
              el: ".swiper-pagination-fractions",
              }}
              modules={[Autoplay, Pagination]}
              id="swiper"
              breakpoints={{
              768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
              },
              1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
              },
              }}
              >
                {
                  ProjectList.filter(project => selectedCategory === "전체" || project.type === selectedCategory).map((e, i) => {
                  return (
                      <SwiperSlide key={i}>
                          <ProjectCard project={e} theme={theme} buttons={Buttons} />
                      </SwiperSlide>
                  );
                  })
                }
              </Swiper>
              <div className="swiper-pagination-fractions"></div>
            </>
            :
            <div className="flex flex-wrap gap-x-3">
              {
                ProjectList.filter(project => selectedCategory === "전체" || project.type === selectedCategory).map((e,i)=>{
                  return(
                      <div key={i} className="basis-full md:basis-[49%] lg:basis-[32.5%] mb-3 h-auto">
                          <ProjectCard project={e} theme={theme} buttons={Buttons} />
                      </div>
                  )
                })
              }                        
            </div>
          }
        </div>
        <img className="w-full lg:pt-20 md:pt-16 pt-14" src={theme === 'light' ? "./../Images/wave.svg" : "./../Images/dark_wave.svg"} alt="wave" />
      </div>
    </>
  );
};

export default forwardRef(Projects);
