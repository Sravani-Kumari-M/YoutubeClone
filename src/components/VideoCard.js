import React from 'react'

const VideoCard = ({info}) => {
    //console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails}=snippet;

  return (

    <div className="p-2 m-2 w-52 shadow-lg">
        <img   className="rounded-lg"alt="thumbnails"src={thumbnails.medium.url}/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>

    </div>
  )
}

export const AdVideoCard=({info})=>{
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails}=snippet;
  return <div className="w-56 p-1 m-1 border border-red-600">
    <img   className="rounded-lg"alt="thumbnails "src={thumbnails.medium.url}/>
    <ul>
    <li className="font-bold py-2">{title}</li>
    <li>Ad:{channelTitle}</li>
    </ul>
  </div>
}

export default VideoCard