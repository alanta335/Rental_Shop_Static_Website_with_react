function GRateCard(props) {
    return (
        <div className="bg-[#DDFFE4] rounded-2xl shadow-md h-[473px] w-[220px] p-10">
            <div className="w-14 h-14">
                <img src="src/assets/light.svg" />
            </div>
            <div className="text-left pt-6 text-[18px] font-semibold">{props.thing}</div>
            <div className="text-left pt-6 text-[20px] font-medium">{props.rate}</div>
            <div className="flex gap-2 mt-4">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t1}</div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t2}</div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t3}</div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t4}</div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t5}</div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t6}</div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="w-4 h-4 pt-1">
                    <img src="src/assets/tick.svg" />
                </div>
                <div>{props.t7}</div>
            </div>
        </div>
    );
}

export default GRateCard;