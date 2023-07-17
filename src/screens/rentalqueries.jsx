import Queries from "../components/RelatedQueries/queries";




function RentalQueries() {
    return (
        <div className="ml-[50px] md:ml-[100px] pb-10">
            <h1 className="text-[48px] font-medium">
                Rental Queries
            </h1>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <Queries ques={'How do I book equipment?'} ans={'Visit our website and browse through our catalog. Add the desired items to your cart and proceed to checkout. Voilà! Your gear is booked.'} />
                <Queries ques={'How do I book equipment?'} ans={'Visit our website and browse through our catalog. Add the desired items to your cart and proceed to checkout. Voilà! Your gear is booked.'} />
                <Queries ques={'How do I book equipment?'} ans={'Visit our website and browse through our catalog. Add the desired items to your cart and proceed to checkout. Voilà! Your gear is booked.'} />
                <Queries ques={'How do I book equipment?'} ans={'Visit our website and browse through our catalog. Add the desired items to your cart and proceed to checkout. Voilà! Your gear is booked.'} />
            </div>
        </div>
    );
}

export default RentalQueries;