import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setsearchSuggestions] = useState([])
    const [showsuggestions, setShowsuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search)
    useEffect(() => {

        // const timer = setTimeout(() => {
        //     if (searchCache[searchQuery]) {
        //         setsearchSuggestions(searchCache[searchQuery]);

        //     } else {
        //         getSearchSuggestions()

        //     }

        // }, 200);

        // return () => {
        //     clearTimeout(timer);
        // }

        getSearchSuggestions();

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        //console.log("API_CALL",searchQuery);
        console.log("get search suggestions executing");
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
        const json = await data.json();
        console.log("search suggestions", json[1]);
       // debugger;
        setsearchSuggestions(json[1]);
    
        //update cache
        // dispatch(cacheResults({
        //     [searchQuery]: json[1],
        // }))
    }
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());

    }


    const handleClick = function(event) {
        console.log("handleclick is executing");
        console.log(event.target.value);
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1" >
                <img onClick={() => toggleMenuHandler()} className="h-11 cursor-pointer" alt="menu-icon" src="https://rueeazy.github.io/youtube-clone/Assets/hamburger-icon.png" />
                <a href="/">
                    <img className="h-8 cursor-pointer" alt="youtube-logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png" />
                </a>
            </div>

            <div className="col-span-10 px-10">
                <div>
                    <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" id="search-video" type="text" value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowsuggestions(true)}

                    />
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 ">🔍</button>
                </div>
                {showsuggestions && (<div className="fixed bg-white py-2 px-5 w-[27rem] shadow-lg rounded-lg border border-red-100 ">
                    <ul>
                        {suggestions.map((s) => {
                            console.log("mapped", s);
                            return <div className="suggestion-button"><button key={s} value={s} onClick={(e) => handleClick(e)}>{s}</button></div>
                        })}


                    </ul>

                </div>)
                }
            </div>
            <div className="col-span-1 ">
                <img className="h-8" alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
               
            </div>

        </div>

    )
}

export default Head;








