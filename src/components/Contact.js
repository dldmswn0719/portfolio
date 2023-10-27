import React from 'react'

function Contact() {
    return (
        <>
            <div className="w-full dark:bg-[#292929]">
                <div className="max-w-7xl mx-auto px-5 dark:text-[#ebf4f1]">
                    <div className="text-xl lg:pb-20 pb-10 pl-5 lg:pl-0 md:pl-0">
                        <p>&#60;Contact &#47;&#62;</p>
                    </div>
                    <div className="px-5 dark:text-[#ebf4f1] pb-20 flex flex-col relative">
                        <div className="h-auto flex flex-wrap justify-between">
                            <div className="sm:basis-full basis-3/5 text-left pr-5 lg:text-lg">
                                <p>항상 새로운 기술을 배우고자 하는 열망이 있습니다.</p>
                                <p>이러한 자세는 저를 끊임없이 성장하게 만들며, 
                                    <br/>더 나은 개발자가 되기 위한 동력이 됩니다.
                                </p>
                                <p>제 포트폴리오를 끝까지 읽어주셔서 감사합니다.</p>
                            </div>
                            <div className="sm:basis-full basis-2/5 sm:pt-5 lg:pl-5">
                                <p>E-mail : dldmswn071918@gmail.com</p>
                                <p>kakao</p>
                                <img src="./../Images/qr.svg" alt="QR" />
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
}

export default Contact