import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faCakeCandles, faEnvelope, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux';
import enMessages from './../locales/en.json';
import krMessages from './../locales/kr.json';

function About() {
    const language = useSelector(state => state.language);
    const messages = language === 'en' ? enMessages : krMessages;

    const AboutList = [
        { icon: faCakeCandles, text: messages.about.birthday },
        { icon: faHouse, text: messages.about.location },
        { icon: faEnvelope, text: messages.about.email },
        { icon: faGithubAlt, text: messages.about.github }
    ]

    const HashTags = messages.hashtags;

    return (
        <>
            <div className="w-full pt-28 dark:bg-[#292929]">
                <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
                    <div className="text-xl">
                        <p>&#60;About &#47;&#62;</p>
                    </div>
                    <div className="h-auto flex overflow-hidden flex-wrap justify-between pt-10">
                        <div className="lg:basis-2/5 basis-full">
                            <img className='mx-auto' src="./../Images/about_me.jpg" alt="about_me" />
                        </div>
                        <div className="lg:basis-3/5 basis-full pt-5 lg:pt-0 lg:pl-5 text-lg">
                            <p>{messages.about1}</p>
                            <p className='py-5'>{messages.about2}
                                <br/>{messages.about3}
                                <br/>{messages.about4}
                            </p>
                            <p>{messages.about5}
                                <br/>{messages.about6}
                                <br/>{messages.about7}
                                <br/>{messages.about8}
                            </p>
                            <p className='pt-5'>{messages.about9}<span className='font-bold'> {messages.about10}</span> {messages.about11}</p>
                            <div className="py-5">
                                <ul className='flex space-x-2 text-base'>
                                    {
                                        HashTags.map((e,i)=>{
                                            return(
                                                <li key={i} className='bg-[#E2F9DC] dark:bg-[#5c5c5c] w-auto rounded-md px-2'>
                                                    &#35;{e}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="flex flex-wrap basis-full">
                                <ul className='lg:basis-1/2 basis-full space-y-3'>
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
                                <ul className='lg:basis-1/2 basis-full leading-9'>
                                    <li>
                                        <FontAwesomeIcon icon={faGraduationCap} />  
                                        <p>{messages.education.period1}
                                            <br/>{messages.education.desc1}
                                            <br/>{messages.education.desc2}
                                            <br/>{messages.education.desc3}
                                            <br/>{messages.education.period2}
                                            <br/>{messages.education.desc4}
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