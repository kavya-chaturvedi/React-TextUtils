import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./pages/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function handleAlert(message, type){
    setAlert({message:message, type:type })
    setTimeout(() => {
      setAlert(null)
    }
    , 2000);
    //  setTimeout(setAlert(null), 1500);
  }
  

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    handleAlert("Dark Mode is enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert("Light Mode is enabled!", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
    
  
     <Navbar
        brandName="TextUtils"
        navItem1="Home"
        navItem2="About"
        navItem3="Register/LogIn"
        inputType="search"
        placeHolder="Search"
        buttontype="submit"
        buttonText="Submit"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alertText={alert}/>
      <div className="container">
      <Routes>
      <Route path="/" element={<TextForm  handleAlert={handleAlert} textAreaTitle="Type the text below to analyze" mode={mode}
        toggleMode={toggleMode} />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
