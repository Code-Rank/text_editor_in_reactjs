import React from "react";

const Alert = (props) => {

    return (

        <>
          <div className="alert alert-success d-flex align-items-center" role="alert" >
                
                <div>
                   {props.alertmsg.msg}
                </div>
            </div>
        </>
    );
}

export default Alert;