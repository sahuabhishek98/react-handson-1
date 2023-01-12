import React,{useState} from "react";
//useState for updating state of react application when we click on button
//It returns value and function
import './ClassComp.css';

 

const ClassComp=()=>{
        const [show2,setShow2] = useState(false);////show2 is property and setShow2 is method
        const showHide1=()=>{
            if(show2 === true){
                setShow2(false)
            }else{setShow2(true)}
        }
        return (
            <>
              <div className="App1">
                 <button className="btn2" onClick={showHide1}>To see styling in class component</button>
              </div>
              
              {show2 && (
              <div className="cont2">
                <h2>This is created using class Component</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
              </div>
              )}
             </>
           );
       }

export default ClassComp;
