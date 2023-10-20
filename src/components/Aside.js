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
            <div onClick={MoveToTop} className="fixed right-5 bottom-5 border border-[#c7e8cf] bg-white dark:bg-[#5c5c5c] dark:border-none rounded-full cursor-pointer w-12 h-12 leading-[48px] text-center">
                <FontAwesomeIcon icon={faArrowUp} size='lg' className='dark:text-[#ebf4f1]' />
            </div>
            <div onClick={() => { dispatch(toggleTheme())}} className="fixed right-5 bottom-20 border border-[#c7e8cf] dark:bg-[#5c5c5c] dark:border-none bg-white rounded-full cursor-pointer w-12 h-12 leading-[48px] text-center">
                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className='dark:text-[#ebf4f1]' size='lg' />
            </div>
        </>
    )
}

export default Aside