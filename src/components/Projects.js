import React, { forwardRef, useEffect, useState } from "react";
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

  const Categories = {
    "en": ["All", "Team", "Personal", "Clone"],
    "kr": ["전체", "팀", "개인", "클론"]
  };
  const SwiperCategory = ["슬라이드 보기" , "박스 보기"]

  const Buttons = {
    "en": [
      {
        icon: faGithubAlt,
        text: "Github",
        bgLight: "bg-[#B6E2CB]",
        bgDark: "dark:bg-[#404343]"
      },
      {
        icon: faShareFromSquare,
        text: "Go to Site",
        bgLight: "bg-[#B6E2CB]",
        bgDark: "dark:bg-[#404343]"
      }
    ],
    "kr": [
      {
        icon: faGithubAlt,
        text: "Github",
        bgLight: "bg-[#B6E2CB]",
        bgDark: "dark:bg-[#404343]"
      },
      {
        icon: faShareFromSquare,
        text: "사이트바로가기",
        bgLight: "bg-[#B6E2CB]",
        bgDark: "dark:bg-[#404343]"
      }
    ]
  };

  const theme = useSelector(state => state.dark);
  const language = useSelector(state => state.language); 
  const [selectSwiper,setSelectSwiper] = useState("박스 보기");
  const [selectedCategory, setSelectedCategory] = useState(Categories[language][0]);

  useEffect(() => {
    setSelectedCategory(Categories[language][0]);
  }, [language]);

  const [swiperAutoplay, setSwiperAutoplay] = useState({
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
  });

  return (
    <>
      <div ref={ref} className="w-full pb-20 dark:bg-[#292929] relative">
        <div className="max-w-7xl mx-auto px-[3%] dark:text-[#ebf4f1]">
          <div className="text-xl pb-8">
            <p>&#60;Projects &#47;&#62;</p>
          </div>
          <div className="pb-6 flex justify-between">
            <ul className="flex space-x-2 relative">
                {
                     Categories[language].map((e,i)=>{
                        return(
                            <li key={i} onClick={() => setSelectedCategory(e)} className={`cursor-pointer px-3 sm:px-2 py-1 ${selectedCategory === e ? theme === "dark" ? "bg-[#5c5c5c] text-[#ebf4f1]" : "bg-[#C7E8CF] text-white" : "border-[#ebf4f1] border"}`}>
                                {e}
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex space-x-2 relative">
              {
                SwiperCategory.map((e,i)=>{
                  return(
                    <React.Fragment key={i}>
                      <li className={`cursor-pointer ${e === selectSwiper ? 'border-b-2 border-[#C7E8CF] dark:border-[#5c5c5c]' : ''} w-8 h-8 flex justify-center items-center`} onClick={()=>{setSelectSwiper(e);}}>
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
              <div className="swiper-pagination-fractions"></div>
              <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={swiperAutoplay}
              onMouseEnter={() => setSwiperAutoplay(null)}
              onMouseLeave={() => setSwiperAutoplay({
                  delay: 5000,
                  disableOnInteraction: false,
              })}
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
                  ProjectList.filter(project => selectedCategory === Categories[language][0] || project.type[language] === selectedCategory).map((e, i) => {
                  return (
                      <SwiperSlide key={i}>
                          <ProjectCard project={e} theme={theme} buttons={Buttons} />
                      </SwiperSlide>
                  );
                  })
                }
              </Swiper>
              
            </>
            :
            <div className="flex flex-wrap gap-x-3">
              {
                ProjectList.filter(project => selectedCategory === Categories[language][0] || project.type[language] === selectedCategory).map((e,i)=>{
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
