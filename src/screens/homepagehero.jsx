import React from 'react'

const HomePageHero = () => {
    return (
        <div className="bg-[url('img/hero-pattern4.jpg')] bg-cover  w-screen h-screen">
            <div className="grid place-content-center h-full gap-24 ">
                <div className="flex">
                    <div className="text-[49px] text-[#ffffff] font-medium">
                        LumenAudio
                    </div>
                    <div className="grow" />
                    <div className="text-[24px] text-[#ffffff] font-bold">
                        Explore
                    </div>
                </div>
                <div className="flex">
                    <div className="grow" />
                    <div className="text-[#ffffff] text-[80px] font-bold w-3/4">
                        Revolutionize the stage with us!
                    </div>
                    <div className="grow" />
                </div>
                <div className="flex">
                    <div className="text-[24px] text-[#ffffff] font-bold">
                        Lights
                    </div>
                    <div className="grow" />
                    <div className="text-[24px] text-[#ffffff] font-bold">
                        Audio
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHero;
