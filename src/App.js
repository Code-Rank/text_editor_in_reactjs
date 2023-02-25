
import { useState } from 'react';
import './App.css';
import Alert from "./components/Alert.js";

import {Mainbody} from './components/Mainbody';


function App() {
  
  const [alertmsg,setAlert]=useState({msg:"Scucces",
    type:"success",});

  const showAlert=(msg,type)=>{
    let el=document.getElementsByClassName('alert');
     console.log(el);
     el[0].style.opacity=1; 
    setAlert({
      msg:msg,
      type:type,
  });

  setTimeout(()=>{
     let el=document.getElementsByClassName('alert');
     console.log(el);
     el[0].style.opacity=0; 

  },1000);


  }
  return (
    
    <>
    
  <Alert alertmsg={alertmsg}/>
  <Mainbody showAlert={showAlert} />
    </>
  );
}

export default App;
