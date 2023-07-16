function AItems(props) {
    return (
        <div>
            <div className={`bg-[url('${props.url}')] bg-cover bg-center rounded-3xl shadow-2xl shadow-black  h-[306px] w-[307px]`} />
            <div className={'pt-12'}>
                <div className={'text-[20px]'}>{props.hed}</div>
                <div className={'text-[20px] pt-4'}>{props.desc}</div>
            </div>
        </div>
    );
}

export default AItems;