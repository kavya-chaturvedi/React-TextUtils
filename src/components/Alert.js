import React from "react";


function Alert(props) {
  function capitalizeAlertType(word){
    let lowerWord = word.toLowerCase();
    return (lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1)); 
  }
  return (
    props.alertText && <>
       <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalizeAlertType(props.alertText.type)}: </strong>{props.alertText.message}
      </div>
    </>
  );
}



export default Alert;
