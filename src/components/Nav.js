import { faBurger, faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store';

function Nav() {

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

    return (
            <>
                <div className="w-full bg-white px-5 sticky top-0 py-4 z-50 dark:bg-[#292929]">
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        <img className='w-32 h-9' src={
                            theme === 'light' ? './../Images/logo.png' : './../Images/logo_dark.png'
                        } alt="logo" />
                        <div className="hidden lg:block basis-2/4 ">
                            <ul className='justify-between flex dark:text-[#ebf4f1]'>
                                {
                                    NavList.map((e,i)=>{
                                        return(
                                            <li key={i} className='cursor-pointer relative hover:after:w-full hover:after:h-0.5 hover:after:absolute hover:after:bg-[#C7E8CF] hover:after:bottom-[-10px] hover:after:left-0
                                            after:w-0 after:duration-500 dark:hover:after:bg-[#fff]'>
                                                &#60;{e} &#47;&#62;
                                            </li>
                                        )
                                    })
                                }
                                <li>
                                    <FontAwesomeIcon onClick={()=>changeLanguage(language === 'kr' ? 'en' : 'kr')} className='w-5 h-5 cursor-pointer' icon={faGlobe} />
                                </li>
                            </ul>
                        </div>
                        <div className="block lg:hidden">
                            <div className="transition-all duration-1000 z-[100] cursor-pointer" onClick={() => {toggleHamburger() }}>
                                {
                                    hamburger ?
                                    <FontAwesomeIcon icon={faXmark} className='w-8 h-8 dark:text-white text-[#C7E8CF]' />
                                    :
                                    <FontAwesomeIcon icon={faBurger} className='w-7 h-7 dark:text-white text-[#C7E8CF]' />
                                }
                            </div>
                        </div>                      
                    </div>
                    <div className={`w-full h-auto fixed bg-white dark:bg-[#292929] z-50 px-5 pt-5 top-[68px] left-0 block lg:hidden ${hamburger ? 'block' : 'hidden'}`}>
                        <ul>        
                            {
                                NavList.map((e,i)=>{
                                    return(
                                        <li key={i} className='pb-5 hover:font-bold cursor-pointer dark:text-[#ebf4f1]'>
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