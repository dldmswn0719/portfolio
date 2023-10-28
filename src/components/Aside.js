import { faArrowUp, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store';

function Aside() {

    const theme = useSelector(state => state.dark);
    const dispatch = useDispatch();

    const MoveToTop = () =>{
        window.scrollTo({
          top:0,behavior:'smooth'
        })
    } 

    return (
        <>
            <div onClick={MoveToTop} className="fixed lg:right-7 right-5 bottom-8 bg-white dark:bg-[#5c5c5c] dark:shadow-none rounded-full cursor-pointer w-12 h-12 leading-[48px] text-center z-[999] shadow-[0_0_0_1px_#dadcdf,0_4px_8px_0_rgba(0,0,0,.15)]">
                <FontAwesomeIcon icon={faArrowUp} size='lg' className='dark:text-[#ebf4f1]' />
            </div>
            <div onClick={() => { dispatch(toggleTheme())}} className="fixed lg:right-7 right-5 bottom-24 dark:bg-[#5c5c5c] dark:shadow-none bg-white rounded-full cursor-pointer w-12 h-12 leading-[48px] text-center z-[999] shadow-[0_0_0_1px_#dadcdf,0_4px_8px_0_rgba(0,0,0,.15)]">
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='dark:text-[#ebf4f1]' size='lg' />
            </div>
        </>
    )
}

export default Aside