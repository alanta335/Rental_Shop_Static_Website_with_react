function ContactCard() {
    return (
        <div className="m-[50px] md:m-[100px] pb-20">
            <div className="text-[48px] font-medium">
                Ready to Electrify Your Event? Let's Get Started!
            </div>
            <div className="flex gap-8 pt-10 md:pl-8 md:flex-row flex-col">
                <div className="bg-[#84d1a6] text-[18px] p-2 rounded-lg shadow-md">
                    Contact Us
                </div>
                <div className="bg-[#a1e8ca] text-[18px] p-2 rounded-lg shadow-md">
                    +91 9263637484
                </div>
                <div className="bg-[#a1e8ca] text-[18px] p-2 rounded-lg shadow-md">
                    jasd@gmail.com
                </div>
            </div>
        </div>
    );
}


export default ContactCard;