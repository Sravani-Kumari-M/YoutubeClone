import React from "react";
import Button from "./Button";

const list=["All","Gaming","Live","Music","Cricket","Soccer","Cooking","Television","ComputerScience","Dhee"]
const ButtonList=()=>{

    return(
        <div className="flex">
           {list.map((item)=>{
              //console.log(item);
               return <Button key={item} name={item}/>
              
              

            })}
            
            {/**<Button name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Live"/>
            <Button name="Music"/>
            <Button name="Cricket"/>
        <Button name="Soccer"/>*/}
            
            

        </div>
    )
}
export default ButtonList;