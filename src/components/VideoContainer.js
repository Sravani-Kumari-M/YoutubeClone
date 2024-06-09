import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard,{AdVideoCard} from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer=()=>{
    const [videos,setvideos]=useState([]);
   
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json=await data.json();
        setvideos(json.items);
       // console.log(json.items);
    }
    
    
    return(

        <div className="flex flex-wrap">
            {videos[4]&&<AdVideoCard info={videos[4]}/>}
            {videos.map((video)=> <Link key={video.id} to={"/watch?v="+video.id}>
                <VideoCard   info={video}/></Link>
           )}
          
           
        </div>
    )
}
export default VideoContainer;