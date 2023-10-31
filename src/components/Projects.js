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
import {ProjectList } from './../data/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = forwardRef((props, ref) => {
  const theme = useSelector(state => state.dark);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectSwiper,setSelectSwiper] = useState("박스 보기")

  const Categories = ["전체", "팀 프로젝트", "개인 프로젝트", "클론코딩"];
  const CateSwiper = ["슬라이드 보기" , "박스 보기" ]

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
      <div ref={ref} className="w-full pb-20 dark:bg-[#292929] relative">
        <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
          <div className="text-xl pb-8">
            <p>&#60;Projects &#47;&#62;</p>
          </div>
          <div className="pb-6 flex justify-between">
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
            <ul className="flex space-x-2 relative">
              {/* {
                CateSwiper.map((e,i)=>{
                  return(
                    <li key={i} onClick={()=>setSelectSwiper(e)}>{e}</li>
                  )
                })
              } */}
              <li className="cursor-pointer" onClick={()=>setSelectSwiper("슬라이드 보기")}>
                <img src={theme === 'light' ? './../Images/slideicon.png' : './../Images/slideicon_dark.png'} alt="슬라이드 아이콘" />
              </li>
              <li className="cursor-pointer" onClick={()=>setSelectSwiper("박스 보기")}>
                <FontAwesomeIcon icon={faTableCellsLarge} />
              </li>
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
            <div className="flex flex-wrap gap-5">
              {
                ProjectList.filter(project => selectedCategory === "전체" || project.type === selectedCategory).map((e,i)=>{
                  return(
                      // <div key={i} className="shadow-[0_3px_8px_0_rgba(0,0,0,.15)] basis-full lg:basis-[31.5%] md:basis-[48%] flex bg-white h-auto dark:bg-[#5c5c5c] dark:border-none">
                      <div key={i} className="border basis-full lg:basis-[31.5%] md:basis-[48%] flex bg-white h-auto dark:bg-[#5c5c5c] dark:border-none">
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
});

export default Projects;
