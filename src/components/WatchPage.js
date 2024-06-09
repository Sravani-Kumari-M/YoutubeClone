import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
    const  [searchParams] = useSearchParams();
    //console.log(searchParams.get("v"));
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    function playVideo(event) {
      console.log("executoing play video");
      event.target.playVideo();

    }
  return (

    <div className="flex flex-col w-full">
      <div className=" flex px-5 py-2 ">
        <div>
          <iframe width="700" height="400"
           src={"https://www.youtube.com/embed/"+searchParams.get("v")+`?autoplay=1`}
           title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
         
         >

        </iframe>
        

        </div>
        <div className="w-full">
          <LiveChat/>

        </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage