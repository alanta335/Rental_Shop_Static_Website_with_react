import insta from '/src/assets/insta.svg';
import fb from '/src/assets/facebook.svg';

function Footer() {
    return (
        <div className="flex ml-[50px] md:ml-[100px] mr-[100px] pb-12">
            <div>
                © 2023 LumenAudio. All rights reserved.
            </div>
            <div className="grow" />
            <div className="flex gap-4">
                <div className="w-8 h-8">
                    <img src={insta} />
                </div>
                <div className="w-8 h-8">
                    <img src={fb} />
                </div>
            </div>
        </div>);
}

export default Footer;