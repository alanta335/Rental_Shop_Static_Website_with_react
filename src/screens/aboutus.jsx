import Des from "../components/About/Des";




function AboutUs() {
    return (
        <div className=" m-[100px] text-left">
            <h2 className="text-[48px]">
                Our Impressive Collection
            </h2>
            <div className="flex pt-[60px]">
                <div className="bg-[url('img/hero-pattern.jpeg')] bg-cover bg-center rounded-3xl shadow-2xl shadow-black  h-[480px] w-[470px] " />
                <div className="pt-[-10px] pl-[60px]">
                    <Des hname={'Dazzling Lights'} hcont={'Illuminate your events with state-of-the-art lighting systems.'} />

                    <Des hname={'Powerful Audio'} hcont={'Crank up the sound with cutting-edge audio equipment'} />

                    <Des hname={'Seamless Service'} hcont={'Our experienced staff ensures a hassle-free rental experience.'} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
