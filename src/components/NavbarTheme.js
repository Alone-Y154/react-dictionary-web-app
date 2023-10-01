import {useState} from "react";

export const NavbarTheme = () => {

    const [theme , setTheme] = useState("Dark");


    const setDarkMode = () => {
        document.querySelector('body').setAttribute("class","dark");

    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute("class","light");

      }

      
const toggleTheme = () => {
    if(theme === "Light") {
      setTheme("Dark");
      setLightMode();
    }else {
        setTheme("Light");
      setDarkMode();
    }
  
  }

  const handleFont = (e) => {
    
    if(e.target.value === "Sans Serif"){
        document.querySelector("#root").style.fontFamily = "Inter";
    }
    if(e.target.value === "Serif"){
        document.querySelector("#root").style.fontFamily = "Lora";
    }
    if(e.target.value === "Mono"){
        document.querySelector("#root").style.fontFamily = "Inconsolata";
    }



  }



    return (

                <div className="nav flex justify-between mt-14 w-[736px] md:w-[689px] sm:w-[327px]">
                    <div className="logo sm:w-[28px] sm:h-8">
                        <img src="./images/logo.svg" alt="logo" className="sm:w-[28px] sm:h-8" />
                    </div>
                    <div className="toggle-theme flex items-center">
                        <div className="flex cursor-pointer">

                        <select onChange = {handleFont} id="font-select" className="outline-none  pr-4 sm:pr-2 appearance-none rounded-2xl  dark:bg-[#050505] dark:text-[#FFF] text-lg sm:text-sm font-bold" >
                            <option value="Sans Serif">Sans Serif</option>
                            <option value="Serif">Serif</option>
                            <option value="Mono">Mono</option>
                        </select>
                        <img src="./images/icon-arrow-down.svg" alt="arrow" className="px-2"/>
                        </div>

                        
                        <div className="divider w-[1px] h-8 bg-[#E9E9E9]  mx-[26px] sm:mx-3 ">

                        </div>
                        <input id="theme-checkbox"  type="checkbox"/>

                        <label htmlFor="theme-checkbox" onClick={toggleTheme}>
                        </label>

                        <img src="./images/icon-moon.svg" alt="moonIcon" />

                    </div>
                </div>
    
    )
}