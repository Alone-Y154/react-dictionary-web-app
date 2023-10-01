export const Error = () => {
    return(
        <div className="error-container flex justify-center mt-32 h-[49.6vh]">
            <div className="flex text-center w-[736px] flex-col sm:w-[327px] md:w-[689px]">
                <p className="text-6xl mb-11">😕</p>
                <p className="text-xl font-bold mb-6 text-[#2D2D2D] dark:text-[#FFF]">No Definitions Found</p>
                <p className="text-lg font-normal text-[#757575] leading-6">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
            </div>
        </div>
    )
}