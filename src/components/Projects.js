import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  const theme = useSelector(state => state.dark)

  const ProjectList = [
    {
      img: './../Images/puriproject.svg',
      title: 'PURIPURI',
      type: '팀 프로젝트',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '2023.08~10.09',
      skills: 'react, firebase, redux, tailwindcss',
      contribution: '30%',
    },
    {
      img: './../Images/mcdonald.svg',
      title: 'Mcdonald',
      type: '클론코딩',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, firebase, redux, tailwindcss',
      contribution: '30%',
    },
    {
      img: './../Images/quiz.svg',
      title: 'QUIZ',
      type: '개인 프로젝트',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, firebase, redux, tailwindcss',
      contribution: '30%',
    },
    {
      img: './../Images/parcel.svg',
      title: 'Parcel',
      type: '개인 프로젝트',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, firebase, redux, tailwindcss',
      contribution: '30%',
    },
    {
      img: './../Images/subway.svg',
      title: 'Subway',
      type: '클론코딩',
      desc: '프로젝트 설명 주르르르르륵',
      duration: '',
      skills: 'react, firebase, redux, tailwindcss',
      contribution: '100%',
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
      <div className="w-full pb-28 dark:bg-[#292929] relative">
        <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
          <div className="text-xl pb-14">
            <p>&#60;Projects &#47;&#62;</p>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
            id="swiper"
            breakpoints={{
              768: {
                slidesPerView: 2,  
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3, 
                spaceBetween: 30
              },
             }}
          >
            {
              ProjectList.map((e,i)=>{
                return(
                  <SwiperSlide key={i}>
                    <div className="max-w-xl bg-white h-auto dark:bg-[#5c5c5c]">
                      <div className="shadow-[5px_5px_5px_5px_rgba(0,0,0,.09)]">
                        <img className="w-full" src={e.img} alt={e.title} />
                        <div className="p-5">
                          <ul>
                            <li className="font-[800] text-2xl">{e.title}</li>
                            <li className="text-[#C3C3C3]">{e.type}</li>
                            <li>{e.desc}</li>
                            <br />
                            <li>기간 : {e.duration}</li>
                            <li>기술 : {e.skills}</li>
                            <li>기여도 : {e.contribution}</li>
                          </ul>
                          <div className="flex space-x-5 py-5">
                            {
                              Buttons.map((e,i)=>{
                                return(
                                  <div key={i} className={`px-5 py-1 w-auto cursor-pointer ${theme === "dark" ? e.bgDark : e.bgLight} rounded-md`}>
                                    <ul className="flex">
                                      <li>
                                        <FontAwesomeIcon icon={e.icon} className="pr-1" />
                                      </li>
                                      <li>
                                        <p>{e.text}</p>
                                      </li>
                                    </ul>
                                  </div>
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
        </div>
        <img className="w-full pt-24" src={theme === 'light' ?
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
