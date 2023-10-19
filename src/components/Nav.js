import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Nav() {

    const NavList = ['About', 'Skills', 'Projects', 'Contact']

    return (
            <>
                <div className="w-full bg-white px-5 sticky top-0 py-3 z-50">
                    <div className="flex items-center justify-between max-w-7xl mx-auto">
                        <img src="https://via.placeholder.com/120x50" alt="logo" />
                        <ul className='basis-2/4 justify-between flex'>
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
                                <FontAwesomeIcon className='w-5 h-5 cursor-pointer' icon={faGlobe} />
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
}

export default Nav