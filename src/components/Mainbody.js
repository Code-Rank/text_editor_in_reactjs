import React, { useState } from "react";

const Mainbody = (props) => {
    const [value, setValue] = useState("Write text here");
    function changeValue() {
        let el = document.getElementById("textAreaExample6");
        //console.log(el.value.toUpperCase());
        setValue(el.value);
    }
    function uppercase() {
        let el = document.getElementById("textAreaExample6");
        console.log(el.value.toUpperCase());
        setValue(el.value.toUpperCase());
        props.showAlert("Covert to uppercase" ,"succes");

    }
    function lowercase() {
        let el = document.getElementById('textAreaExample6');
        setValue(el.value.toLowerCase());
        props.showAlert("convert to lowercase" ,"succes");
    }
    function reverseText() {
        let reverse_text = "";
        for (let i = 0; i < value.length; i++) {
            reverse_text = reverse_text + value[value.length - (i + 1)];

        }
        console.log(reverse_text);
        setValue(reverse_text);
        props.showAlert("text is reversed" ,"succes");
    }
    return (

        <>







        

            <div className="form-outline mb-4 my- 6 w-75 my-5 justify-content-center " style={{ marginLeft: "12.5%" }}>
                <textarea className="form-control" id="textAreaExample6" rows="3" onChange={changeValue} value={value}></textarea>

                <input type="button" className="btn btn-primary my-4 d-inline " onClick={uppercase} value="To upper case" />
                <input type="button" className="btn btn-primary my-4 d-inline mx-2" onClick={lowercase} value="To lower case" />
                <input type="button" className="btn btn-primary my-4 d-inline mx-2" onClick={reverseText} value="Reverse text" />

                <p>{value.split(" ").length} word and {value.length} character</p>
            </div>


        </>

    );

}

export { Mainbody };