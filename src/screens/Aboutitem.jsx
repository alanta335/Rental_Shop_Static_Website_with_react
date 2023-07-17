import AItems from "../components/AboutItem/Item";

function AboutItem() {
    return (

        <div className="m-[50px] md:m-[100px] text-left">
            <h2 className="text-[48px]">
                Rental Showcase
            </h2>
            <div className="flex flex-wrap pt-[60px] gap-10 lg:flex-row flex-col">
                <AItems hed={"Studio Mics"} desc={"Capture your voice with crystal-clear precision for podcasts and recordings."} url={"img/hero-pattern.jpeg"} />
                <AItems hed={"DJ Gear"} desc={"Liven up the party with top-notch DJ equipment and audio mixers for seamless transitions."} url={"img/hero-pattern4.jpg"} />
                <AItems hed={"Light Shows"} desc={"Transform any space into a dazzling extravaganza with our spectacular lighting effects."} url={"img/hero-pattern4.jpg"} />
                <AItems hed={"Studio Mics"} desc={"Capture your voice with crystal-clear precision for podcasts and recordings."} url={"img/hero-pattern4.jpg"} />
            </div>
        </div>
    );
}

export default AboutItem;