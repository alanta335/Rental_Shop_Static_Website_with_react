function Footer() {
    return (
        <div className="flex ml-[50px] md:ml-[100px] mr-[100px] pb-12">
            <div>
                © 2023 LumenAudio. All rights reserved.
            </div>
            <div className="grow" />
            <div className="flex gap-4">
                <div className="w-8 h-8">
                    <img src="src/assets/insta.svg" />
                </div>
                <div className="w-8 h-8">
                    <img src="src/assets/facebook.svg" />
                </div>
            </div>
        </div>);
}

export default Footer;