import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faCakeCandles, faEnvelope, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function About() {

    const AboutList = [
        { icon: faCakeCandles, text: '99.07.19' },
        { icon: faHouse, text: '대구광역시 달서구' },
        { icon: faEnvelope, text: 'dldmswn071918@gmail.com' },
        { icon: faGithubAlt, text: 'Git' }
      ]

    const HashTags = ['활발한', '', '모르겠당']

    return (
        <>
            <div className="w-full pt-9 ">
                <div className="max-w-7xl mx-auto px-5">
                    <div className="text-[20px]">
                        <p>&#60;About &#47;&#62;</p>
                    </div>
                    <div className="h-auto flex overflow-hidden flex-wrap justify-between pt-5">
                        <div className="lg:basis-[40%] md:basis-[40%] basis-full">
                            <img className='mx-auto' src="./../Images/about_me.jpg" alt="about_me" />
                        </div>
                        <div className="lg:basis-[60%] md:basis-[60%] basis-full sm:pt-5 lg:pl-5 text-[17px]">
                            <p>안녕하세요! 저는 주니어 개발자 이은주입니다.</p>
                            <p className='py-5'>프론트엔드 개발에 깊은 열정을 가지고 있습니다.
                                <br/>제 지식을 확장하고 다양한 기술 분야를 탐구하는 것에 큰 관심이 있습니다.
                                <br/>백엔드에 대한 이해도 또한 키우려는 노력 중입니다.
                            </p>
                            <p>저는 스스로에게 새로운 과제를 내면서 계속해서 발전할 수 있는 기회를 만들려고 노력합니다.
                                <br/>이런 도전적인 자세와 열정으로 단순히 코드를 작성하는 것 이상의 가치를 창출하려 합니다.
                                <br/>세상이 변화하는 속도에 발맞춰 가면서도 변화를 두려워하지 않는 태도를 가지고 있습니다.
                                <br/>오히려 새로운 도전을 즐기며 그것이 저에게 주는 성장의 기회를 소중히 여깁니다.
                            </p>
                            <p className='pt-5'>앞으로도 지속적인 학습과 도전으로<span className='font-bold'> 프론트엔드 개발자</span>로서의 길을 걷겠습니다.</p>
                            <div className="py-5">
                                <ul className='flex space-x-2 text-[15px]'>
                                    {
                                        HashTags.map((e,i)=>{
                                            return(
                                                <li key={i} className='bg-[#E2F9DC] w-auto rounded-md px-2'>
                                                    &#35;{e}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="flex sm:flex-wrap">
                                <ul className='space-y-3'>
                                    {
                                        AboutList.map((e,i)=>{
                                            return(
                                                <li key={i} className='flex'>
                                                    <FontAwesomeIcon icon={e.icon} />
                                                    <p className='pl-3'>{e.text}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className='lg:pl-10'>
                                    <li>
                                        <FontAwesomeIcon icon={faGraduationCap} />  
                                        <p>2023.06~2023.11
                                            <br/>그린컴퓨터아트학원 900H
                                            <br/>React를 활용한 프론트엔드 개발자 양성
                                            <br/>(SPA 프로젝트 개발)A
                                            <br/>2018.03~2022.02
                                            <br/>영남이공대학교 (물리치료과) 
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About