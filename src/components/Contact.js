import React from 'react'

function Contact() {
    return (
        <>
            <div className="w-full py-64 dark:bg-[#292929] flex flex-col items-center justify-center relative">
                <div className="absolute top-0 left-[15%] m-5">
                    <div className="text-xl dark:text-[#ebf4f1]">
                        <p>&#60;Contact &#47;&#62;</p>
                    </div>
                </div>
                <div className="max-w-7xl px-5 dark:text-[#ebf4f1] pb-9">
                    <div className="h-auto flex flex-wrap justify-between">
                        <div className="basis-full lg:basis-[70%] md:basis-[70%] pr-5">
                            <p className='lg:text-2xl'>저는 항상 새로운 기술을 배우고자 하는 열망이 있습니다.</p>
                            <p className='lg:text-xl'>이러한 자세는 저를 끊임없이 성장하게 만들며, 
                                <br/>더 나은 개발자가 되기 위한 동력이 됩니다.
                            </p>
                            <p className='lg:text-xl'>제 포트폴리오를 끝까지 읽어주셔서 감사드립니다.</p>
                        </div>
                        <div className="basis-full lg:basis-[30%] md:basis-[30%] pl-5">
                            <p>E-mail : dldmswn071918@gmail.com</p>
                            <p>kakao</p>
                            <img src="./../Images/qr.svg" alt="QR" />
                        </div>
                    </div>
                </div>
                <div className="w-full absolute bottom-0 bg-[#D1EDDC] p-5">
                    <p className='text-center'>© 2023.11~.LEEEUNJU. All rights reserved.</p>   
                </div>
            </div>
        </>
    )
}

export default Contact