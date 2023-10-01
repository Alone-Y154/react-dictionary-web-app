import { NavbarTheme } from "./components/NavbarTheme";
import { Error } from "./components/Error";
import { Search } from "./components/Search";
import { Result } from "./components/Result";
import { useState } from "react";



function App() {

    const sampleData = [
        {
            "word": "keyword",
            "phonetics": [
                {
                    text: "/ˈkiːbɔːd/",
                    audio: "//ssl.gstatic.com/dictionary/static/sounds/20220808/keyboard--_gb_1.mp3"
                }
            ],
            "meanings": [
                {
                    "partOfSpeech": "noun",
                    "definitions": [
                        {
                            "definition": "Any word used as the key to a code.",
                            "synonyms": [],
                            "antonyms": []
                        },
                        {
                            "definition": "Any word used in a reference work to link to other words or other information.",
                            "synonyms": [],
                            "antonyms": []
                        },
                        {
                            "definition": "A reserved word used to identify a specific command, function etc.",
                            "synonyms": [],
                            "antonyms": []
                        },
                        {
                            "definition": "Any word that occurs in a text more often than normal.",
                            "synonyms": [],
                            "antonyms": []
                        }
                    ],
                    "synonyms": [
                        "operative word",
                        "workword"
                    ],
                    "antonyms": []
                },
                {
                    "partOfSpeech": "verb",
                    "definitions": [
                        {
                            "definition": "To tag with keywords, as for example to facilitate searching.",
                            "synonyms": [],
                            "antonyms": []
                        }
                    ],
                    "synonyms": [],
                    "antonyms": []
                }
            ],
            "license": {
                "name": "CC BY-SA 3.0",
                "url": "https://creativecommons.org/licenses/by-sa/3.0"
            },
            "sourceUrls": [
                "https://en.wiktionary.org/wiki/keyword"
            ]
        }
    ]

    const [apiData, setApiData] = useState(sampleData);
    const [timeoutId, updateTimeoutId] = useState();




    const onTextChange = (e) => {

        clearTimeout(timeoutId); //The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
        const timeout = setTimeout(() => fetchApi(e.target.value), 1000); //created a settimeout function which will be called
        // after the 1000ms or 10 sec
        updateTimeoutId(timeout); // updating the timeoutid using usestate hook
        // before updating we are clearing the value set to timeout ID 

    };

    const fetchApi = (val) => {
        // console.log("agvsjkj",val)
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
            .then((response) => response.json())
            .then((result) => setApiData(result))

        // if(apiData.length === 0) {
        //   setNoData(true)
        // }
        // if(apiData.length > 0){
        //   setNoData(false)
        // }


        // console.log(apiData)
    }
    return (


        <div className="dictionary-container flex justify-center pb-20 dark:bg-[#050505] ">
            <div className="dictionary-content flex flex-col ">
                <NavbarTheme />
                <Search handleChange={onTextChange} />

                {apiData.length ? <Result data={apiData} /> : <Error />}

            </div>
        </div>
    );
}

export default App;
