import React from 'react'

const HomePageHero = () => {
    return (
        <div className="bg-[url('img/hero-pattern4.jpg')] md:bg-cover bg-center  w-screen h-screen">
            <div className="grid place-content-center h-full gap-24 ">
                <div className="flex">
                    <div className="md:text-[49px] text-[29px] text-[#ffffff] font-medium pl-1">
                        LumenAudio
                    </div>
                    <div className="grow" />
                    <div className="md:text-[24px] text-[14px] text-[#ffffff] font-bold pr-1">
                        Explore
                    </div>
                </div>
                <div className="flex">
                    <div className="grow" />
                    <div className="text-[#ffffff] md:text-[80px] text-[43px] text-center font-bold md:w-3/4 w-[90%] mt-[-10px]">
                        Revolutionize the stage with us!
                    </div>
                    <div className="grow" />
                </div>
                <div className="flex mt-[140px]">
                    <div className="md:text-[24px] text-[14px] text-[#ffffff] font-bold pl-1">
                        Lights
                    </div>
                    <div className="grow" />
                    <div className="md:text-[24px] text-[14px] text-[#ffffff] font-bold pr-1">
                        Audio
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHero;
