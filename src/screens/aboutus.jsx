import Des from "../components/About/Des";

function AboutUs() {
    return (
        <div className=" m-[50px] md:m-[100px] text-left">
            <h2 className="text-[48px]">
                Our Impressive Collection
            </h2>
            <div className="md:flex pt-[60px]">
                <div className="bg-[url('img/hero-pattern.jpeg')] bg-cover bg-center rounded-3xl shadow-2xl shadow-black  md:h-[480px] md:w-[470px] h-[280px] w-[270px]" />
                <div className="pt-[-10px] md:pl-[60px] pl-[20px]">
                    <Des hname={'Dazzling Lights'} hcont={'Illuminate your events with state-of-the-art lighting systems.'} />

                    <Des hname={'Powerful Audio'} hcont={'Crank up the sound with cutting-edge audio equipment'} />

                    <Des hname={'Seamless Service'} hcont={'Our experienced staff ensures a hassle-free rental experience.'} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
