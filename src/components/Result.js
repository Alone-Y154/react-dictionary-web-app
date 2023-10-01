import React from 'react';

export const Result = (props) => {

    const data = props.data;

    // var audio = new Audio(`https://ssl.gstatic.com/dictionary/static/sounds/20220808/${data[0].word}--_gb_1.mp3`);

    var audio = new Audio(data[0].phonetics.length && data[0].phonetics[0].audio)

    return (

        <div className="result-container flex flex-col w-[736px] mt-11 md:w-[689px] sm:w-[327px] sm:mt-6">
            <div className="keyword-container flex h-[114px] justify-between items-center">
                <div className="keyword-text flex flex-col">
                    <p className="text-[64px] h-[77px] text-[#2D2D2D] dark:text-[#FFF] font-bold items-center flex sm:text-[32px]">{data[0].word}</p>
                    {data[0].phonetics.length ?
                        <p className="text-2xl sm:text-lg font-normal text-[#A445ED] mt-2">{data[0].phonetics[0].text}</p> : ""}
                </div>
                {data[0]?.phonetics.length ? data[0]?.phonetics[0].audio ?
                    <div className="keyword-audio w-[75px] h-[75px] sm:w-12 sm:h-12 cursor-pointer">

                        <img src="./images/icon-play.svg" onClick={() => audio.play()} alt="play" />

                    </div>
                    : "" : ""}
            </div>

            {data[0].meanings.map((meaning, i) => {
                return (
                    <div className="noun-container flex flex-col mt-10 sm:mt-7">
                        <div className="noun-heading flex gap-5 items-center">
                            <p key={i} className="text-[#2D2D2D] dark:text-[#FFF] text-2xl font-bold italic sm:text-lg">{meaning.partOfSpeech}</p>
                            <hr className="h-[1px] w-[656px] bg-[#E9E9E9] dark:bg-[#3A3A3A]  md:w-[608px] sm:w-[266px]" />
                        </div>

                        <div className="mt-10 sm:mt-8">
                            <p className="text-[#757575] text-xl sm:text-base font-normal">Meaning</p>
                        </div>

                        <div className="meaning-list mt-6 w-[689px] ml-10 md:w-[641px] sm:w-[302px]">

                            <ul className="list-disc list-outside  flex flex-col gap-3 marker:text-[#8F19E8]">
                                {meaning.definitions.map((x, i) => {
                                    return (<li key={i} className="text-[#2D2D2D] dark:text-[#FFF] text-lg font-normal sm:text-[15px]">{x.definition} </li>)
                                })}

                            </ul>

                        </div>
                        {meaning.synonyms.length ? <div className="mt-16 flex flex-wrap gap-[22px] w-[736px] md:w-[689px] sm:w-[327px]">
                            <p className="text-xl text-[#757575] font-normal sm:text-base">Synonyms</p>
                            {meaning.synonyms.map((a, i) => {
                                return (<p key={i} className="text-[#A445ED] flex  text-xl px-2 font-bold sm:text-base">{a}</p>)

                            })}

                        </div> : ""}

                    </div>)
            })}
            <hr className="bg-[#E9E9E9] dark:bg-[#3A3A3A] h-[1px] mt-10 sm:mt-8" />

            <div className="mt-5 flex sm:flex-col gap-2">
                <p className="text-sm text-[#757575] font-normal underline mr-2">Source</p>
                <a href={data[0].sourceUrls[0]} className="text-[#2D2D2D] dark:text-[#FFF] flex text-sm font-normal underline">{data[0].sourceUrls[0]} <img src="./images/icon-new-window.svg" alt="new window" className="ml-[9px]" /></a>

            </div>
        </div>
    )
}