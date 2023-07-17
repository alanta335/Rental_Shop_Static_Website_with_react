function Queries(props) {
    return (
        <div className="w-3/4 mt-16">
            <div className="font-normal text-[20px]">
                {props.ques}
            </div>
            <div className="pt-4 font-light text-justify">
                {props.ans}
            </div>
        </div>
    );
}

export default Queries;