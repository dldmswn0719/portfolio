import { faBurger, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store';
import { NavLink } from 'react-router-dom';

function Nav({ aboutRef, skillsRef, projectsRef, contactRef }) {

    const theme = useSelector(state => state.dark)

    const language = useSelector(state => state.language);
    const dispatch = useDispatch()
    const changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        dispatch(setLanguage(lang));
    }

    const [hamburger, setHamburger] = useState(false)

    const toggleHamburger = () => {
        setHamburger(!hamburger)
    }

    const NavList = ['About', 'Skills', 'Projects', 'Contact']

    const scrollToRef = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth'
        });
      };

    return (
            <>
                <div className="w-full bg-white px-5 sticky top-0 py-4 z-50 dark:bg-[#292929]">
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        <NavLink to='/'>
                            <img className='w-32 h-9' src={
                                theme === 'light' ? './../Images/logo.png' : './../Images/logo_dark.png'
                            } alt="logo" />
                        </NavLink>
                        <div className="hidden lg:block basis-2/4 ">
                            <ul className='justify-between flex dark:text-[#ebf4f1]'>
                                {
                                    NavList.map((e, i) => {
                                        const refMap = {
                                            About: aboutRef,
                                            Skills: skillsRef,
                                            Projects: projectsRef,
                                            Contact: contactRef
                                        };
                                        const ref = refMap[e];
                                        return (
                                            <li key={i} onClick={() => scrollToRef(ref)} className="cursor-pointer relative hover:font-bold after:w-full after:h-0.5 after:absolute  after:bg-[#C7E8CF] after:bottom-[-10px] after:left-0 after:transition-all after:duration-500 dark:after:bg-[#fff] after:scale-x-0 hover:after:scale-x-100">
                                                &#60;{e} &#47;&#62;
                                            </li>
                                        );
                                    })
                                }
                                <li>
                                    <FontAwesomeIcon onClick={()=>changeLanguage(language === 'kr' ? 'en' : 'kr')} className='pt-0.5 w-5 h-5 cursor-pointer' icon={faGlobe} />
                                </li>
                            </ul>
                        </div>
                        <div className="block lg:hidden">
                            <div className="flex">
                                <FontAwesomeIcon onClick={()=>changeLanguage(language === 'kr' ? 'en' : 'kr')} className='cursor-pointer w-[24px] h-[24px] mr-5 mt-[3px] dark:text-[#ebf4f1] text-[#C7E8CF]' icon={faGlobe} />
                                <div className="transition-all duration-1000 z-[100] cursor-pointer" onClick={() => {toggleHamburger() }}>
                                    <FontAwesomeIcon icon={hamburger ? faXmark : faBurger} className={`dark:text-[#ebf4f1] text-[#C7E8CF] ${hamburger ? 'w-8 h-8' : 'w-7 h-7'}`} />
                                </div>
                            </div>
                        </div>                      
                    </div>
                    <div className={`w-full h-auto fixed bg-white dark:bg-[#292929] z-50 px-5 pt-5 top-[68px] left-0 block lg:hidden ${hamburger ? 'block' : 'hidden'}`}>
                        <ul>        
                            {
                                NavList.map((e,i)=>{
                                    const refMap = {
                                        About: aboutRef,
                                        Skills: skillsRef,
                                        Projects: projectsRef,
                                        Contact: contactRef
                                    };
                                    const ref = refMap[e];
                                    return(
                                        <li key={i} onClick={() => scrollToRef(ref)} className='pb-5 hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>
                                            &#60;{e} &#47;&#62;
                                        </li>
                                    )
                                })
                            }                                    
                        </ul>
                    </div>
                </div>
            </>
        )
}

export default Nav