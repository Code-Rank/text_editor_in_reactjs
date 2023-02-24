import React,{useState} from "react";

const Mainbody = (props) => {
    const [value,setValue]=useState("Write text here");
    function changeValue(){
        let el=document.getElementById("textAreaExample6");
        //console.log(el.value.toUpperCase());
        setValue(el.value);
    }
    function uppercase(){
        let el=document.getElementById("textAreaExample6");
        console.log(el.value.toUpperCase());
        setValue(el.value.toUpperCase());

    }
    function lowercase(){
        let el=document.getElementById('textAreaExample6');
        setValue(el.value.toLowerCase());
    }
    return (

        <>

            


            <div className="form-outline mb-4 my- 6 w-75 my-5 justify-content-center "  style={{marginLeft:"12.5%"}}>
                <textarea className="form-control" id="textAreaExample6" rows="3" onChange={changeValue} value={value}></textarea>
               
                <input type="button" className="btn btn-primary my-4 d-inline " onClick={uppercase} value="To upper case"/> 
                <input type="button" className="btn btn-primary my-4 d-inline mx-2" onClick={lowercase} value="To lower case"/> 
                
                
                <p>{value.split(" ").length} word and {value.length} character</p>   
            </div>
            

        </>

    );

}

export { Mainbody};