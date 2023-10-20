import { faBurger, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store';

function Nav() {

    const language = useSelector(state => state.language);
    const dispatch = useDispatch()
    const changeLanguage = (lang) => {
        localStorage.setItem('language', lang);
        dispatch(setLanguage(lang));
    }

    const NavList = ['About', 'Skills', 'Projects', 'Contact']

    return (
            <>
                <div className="w-full bg-white px-5 sticky top-0 py-3 z-50 dark:bg-[#292929]">
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        <img src="https://via.placeholder.com/120x50" alt="logo" />
                        <ul className='basis-2/4 justify-between flex dark:text-[#ebf4f1] sm:hidden'>
                            {
                                NavList.map((e,i)=>{
                                    return(
                                        <li key={i} className='cursor-pointer'>
                                            &#60;{e} &#47;&#62;
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <FontAwesomeIcon onClick={()=>changeLanguage(language === 'kr' ? 'en' : 'kr')} className='w-5 h-5 cursor-pointer' icon={faGlobe} />
                            </li>
                        </ul>
                        <ul className='sm:block hidden'>
                            <li>
                                <FontAwesomeIcon icon={faBurger} className='text-3xl cursor-pointer'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
}

export default Nav