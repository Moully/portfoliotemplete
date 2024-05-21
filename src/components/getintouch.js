export const Getintouch = (props)=>{
    return(
        <div className="flex flex-col items-center gap-[10px] my-[20px]">
            <h2 className={`px-[20px] ${props.pagemode > 0 ? "bg-[#4B5563]": "bg-[#E5E7EB]"} rounded-lg`}>Get In Touch</h2>
            <p className={`${props.pagemode > 0 ? "text-[#D1D5DB]":"text-[#4B5563]"} text-[20px] md:w-[70%] md:my-[20px]`}>What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.</p>
            <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[10px]">
                    <div className="w-[24px] h-[24px]">
                        <img className={`${props.pagemode > 0 ? "invert" : ""} h-full w-full`} src="/mail.svg"/>
                    </div>
                    <p className="font-semibold text-[18px]">amoramgl@gmail.com</p>
                    <div className="w-[24px] h-[24px]">
                        <img className={`${props.pagemode > 0 ? "invert" : ""} h-full w-full`} src="/copy.svg" width={24} height={24}/>
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <div className="w-[24px] h-[24px]">
                        <img className={`${props.pagemode > 0 ? "invert" : ""} h-full w-full`} src="/github-42.svg"/>
                    </div>
                    <p className="font-semibold text-[18px]">https://github.com/Moully</p>
                    <div className="w-[24px] h-[24px]">
                        <img className={`${props.pagemode > 0 ? "invert" : ""} h-full w-full`} src="/copy.svg" width={24} height={24}/>
                    </div>
                </div>
            </div>
        </div>
    )
}