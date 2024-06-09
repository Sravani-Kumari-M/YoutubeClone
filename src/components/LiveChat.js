import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';
import { makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

  const[liveMessage,setLiveMessage]=useState("")
  const dispatch=useDispatch();

  const ChatMessages=useSelector((store)=>store.chat.messages)
  useEffect(()=>{
    
    const i=setInterval(()=>{
      //API polling
      //console.log("API polling");


      dispatch(addMessage({
        name:generateRandomName(),
        message:makeRandomMessage(20)
      })
      
    );

    },5000);

    return ()=>clearInterval(i);
  },[]);
 

  return (
    <>
    <div>
    <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
       {ChatMessages.map((c,i)=> (<ChatMessage key={i} name={c.name} message={c.message}/>))  }
      
    </div>
    </div>
    <form className=" w-full ml-2 p-2  border border-black" onSubmit={(e)=>{
      e.preventDefault();
     dispatch(addMessage({
      name:"Sravani Kumari",
      message:liveMessage

     }))
     setLiveMessage("")
    }}>
      <input className='w-80' type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
      <button className="px-2  bg-green-200" >send</button>
      
    </form>
    </>
    
  )
}

export default LiveChat;