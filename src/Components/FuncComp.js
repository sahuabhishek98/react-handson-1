import React,{useState} from "react";
//useState for updating state of react application when we click on button
//It returns value and function
import './FuncComp.css';

 

const FuncComp=()=>{
    
        const [show1,setShow1] = useState(false);//show1 is property and setShow1 is method
        const showHide=()=>{
            if(show1 === true){
                setShow1(false)
            }else{setShow1(true)}
        }
        
        return (
            <>
              <div className="App1">
                 <button className="btn1" onClick={showHide}>To see styling in functional component</button>
                
              </div>
              {show1 && (
              <div className="cont1">
                <h2>This is created using functional Component</h2>
                <p>This is done using external CSS</p>
                <p style={{color:"blue"}}>This is done using inline CSS</p>
              </div>)}
              
             </>
           );
       }

export default FuncComp;
