import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles, faCarSide, faEnvelope, faGraduationCap, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import localeData  from './../locales/enkr.json';

function About(props, ref){

    const language = useSelector(state => state.language);
    const messages  = localeData[language]
    const theme = useSelector(state => state.dark);

    const AboutList = [
        { icon: faCakeCandles, text: messages.about.birthday },
        { icon: faHouse, text: messages.about.location },
        { icon: faEnvelope, text: messages.about.email },
        { icon: faGithubAlt, text: messages.about.github , href : "https://github.com/dldmswn0719"},
        { icon : faCarSide , text : messages.about.certificate}
        
    ]

    const HashTags = messages.hashtags;

    return (
        <>
            <div ref={ref} className="w-full lg:pt-24 md:pt-16 pt-10 dark:bg-[#292929]">
                <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
                    <div className="text-xl">
                        <p>&#60;About &#47;&#62;</p>
                    </div>
                    <div className="h-auto flex flex-wrap justify-between pt-10">
                        <div className="lg:basis-2/5 md:basis-[50%] basis-full">
                            <img className='mx-auto' src={
                                theme === "light" ? './../Images/about_me.jpg' : './../Images/about_me_dark.jpg'
                            } alt="about_me" />
                        </div>
                        <div className="lg:basis-3/5 md:basis-[50%] basis-full pt-5 lg:pt-0 md:pl-5 md:pt-0 lg:pl-5 text-base lg:text-lg">
                            <p>{messages.about1}</p>
                            <p className='py-5'>{messages.about2}
                                <br/>{messages.about3}
                                <br/>{messages.about4}
                            </p>
                            <p>{messages.about5}<span className='font-bold'> {messages.about6}</span> {messages.about7}</p>
                            <div className="pt-10 pb-5">
                                <ul className='flex space-x-2 text-base lg:text-lg'>
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
                            <div className="flex flex-wrap basis-full border-2 rounded-3xl py-5 pl-5 pr-2 lg:py-14 mt-2 lg:mt-5 border-[#C8E9D8] dark:border-[#5c5c5c]">
                                <ul className='lg:basis-1/2 basis-full space-y-3 text-base lg:text-lg'>
                                    {
                                        AboutList.map((e,i)=>{
                                            return(
                                                <li key={i} className="flex first:pl-0.5">
                                                    <FontAwesomeIcon className={`pt-1 ${i === 3 && 'w-5 h-5'}`} icon={e.icon} />
                                                    {
                                                        e.href
                                                        ?
                                                        <a href={e.href} target="_blank" rel="noreferrer" className='pl-3'>
                                                            {e.text}
                                                        </a>                                                    
                                                        :                                                        
                                                        <p className='pl-3'>{e.text}</p>                                                       
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <ul className='lg:basis-1/2 basis-full leading-9'>
                                    <li className='flex'>
                                        <FontAwesomeIcon className='lg:pt-1.5 pt-2 lg:pr-3 pr-2' icon={faGraduationCap} />  
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
};

export default forwardRef(About);