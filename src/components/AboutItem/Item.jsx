function AItems(props) {
    return (
        <div>
            <div className={`bg-[url('${props.url}')] bg-cover bg-center rounded-3xl shadow-2xl shadow-black  md:h-[306px] md:w-[307px] h-[206px] w-[207]`} />
            <div className={'pt-12 md:h-[306px] md:w-[307px] h-[206px] w-[207]'}>
                <div className={'text-[20px]'}>{props.hed}</div>
                <div className={'text-[20px] pt-4 text-justify'}>{props.desc}</div>
            </div>
        </div>
    );
}

export default AItems;