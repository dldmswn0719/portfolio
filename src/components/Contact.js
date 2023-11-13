import React, { forwardRef } from 'react'
import localeData  from './../locales/enkr.json';
import { useSelector } from 'react-redux';

function Contact(props, ref){

    const language = useSelector(state => state.language);
    const messages  = localeData[language];

    return (
        <>
            <div ref={ref} className="w-full dark:bg-[#292929]">
                <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
                    <div className="text-xl lg:pb-20 pb-10 pl-5 lg:pl-0 md:pl-0">
                        <p>&#60;Contact &#47;&#62;</p>
                    </div>
                    <div className="px-5 dark:text-[#ebf4f1] pb-20 flex flex-col relative">
                        <div className="h-auto flex flex-wrap justify-between">
                            <div className="sm:basis-full basis-3/5 text-left pr-5 lg:text-lg">
                                <p>{messages.contact1}</p>
                                <p>{messages.contact2}
                                    <br/>{messages.contact3}
                                </p>
                                <p>{messages.contact4}</p>
                            </div>
                            <div className="sm:basis-full basis-2/5 sm:pt-5 lg:pl-5">
                                <p>E-mail : dldmswn071918@gmail.com</p>
                                <p>kakao</p>
                                <img className='w-40 h-40' src="./../Images/qr.png" alt="QR" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#D1EDDC] dark:bg-[#5c5c5c] dark:text-[#ebf4f1] px-5 py-3">
                    <p className='lg:text-base text-sm text-center'>© 2023.11~. LEEEUNJU. All rights reserved.</p>   
                </div>
            </div>
        </>
    )
};

export default forwardRef(Contact);