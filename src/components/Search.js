
export const Search = (props) => {

    return (
        <div className="search-container flex mt-[52px] w-[736px] md:w-[689px] sm:w-[327px]">
            <div className="search-input justify-between flex bg-[#F4F4F4] dark:bg-[#1F1F1F] w-[736px] h-16 sm:h-12 rounded-2xl focus:border active:border hover:border hover:border-solid hover:border-[#A445ED] active:border-solid active:border-[#A445ED] focus:border-solid focus:border-[#A445ED] items-center px-6">
                <input type="text" onChange={props.handleChange} placeholder="Search for any word…" className="h-9/12 w-9/12 bg-[#F4F4F4] dark:bg-[#1F1F1F] outline-none font-bold text-[20px] sm:text-base placeholder:font-bold text-[#2D2D2D] placeholder:opacity-25 dark:text-[#FFF]" />
                <img src="./images/icon-search.svg" alt="Icon Img" className="sm:h-4 sm:w-16" />
            </div>
        </div>
    )
}