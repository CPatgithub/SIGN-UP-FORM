import React, {Component, useState} from "react";
import '../styles/App.css';
import Form from "./Form";
import { signUpFormValidation } from "../utils/validation";
import WlecomeMsg from "./WlecomeMsg";

const App = () => {
  const [error,setError] = useState('')
  const [email,setemail] = useState('')
  function SubmitForm(formdata){
    const ErrorMsg = signUpFormValidation(formdata)
    if(ErrorMsg !== null){
      setError(ErrorMsg)
      setemail('');
    }
    else{
      setError('')
      setemail(formdata.email);
    }
  }
  return (
    <div id="main">
      <Form SubmitForm={SubmitForm}/>
      {email?<WlecomeMsg email={email}/> :error? <div className="error">*{error}</div>:null}
      
    </div>
  )
}


export default App;
