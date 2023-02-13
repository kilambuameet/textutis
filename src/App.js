// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Textform from "./component/Textform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  /////////////////////////////////////////////////////Buleish dark mode//////////////////////////
  const [mode, setmode] = useState("dark");
  const togglestyle = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#022d55";
      alertvalue("Light mode has been enabled", "Success");
      document.title = "Textutils-Darkmode";
      //////////////////////////////////////////////////title change garna lai using set interval//////////////////////
      // setInterval(() => {
      //
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Textutils";
      // }, 1000);
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "white";
      alertvalue("Dark mode has been enabled", "Success");
      document.title = "Textutils-Lightmode";
    }
  };

  ///////////////////////////////////////////////////////////////////brownish dark mode//////////////////////
  // const [greendarkmode, setgreendarkmode] = useState("dark");
  // const gdarkmode = () => {
  //   if (mode === "dark") {
  //     setmode("light");
  //     document.body.style.backgroundColor = "#212a38";
  //   } else {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };
  //////////////////////////////////////////////////////////////alert function///////////////////////
  const [alert, setAlert] = useState(null);
  const alertvalue = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          abouttitle="About us"
          mode={mode}
          togglestyle={togglestyle}
          // greendarkmode={greendarkmode}
          // gdarkmode={gdarkmode}
        />
        {/* //////////////////////////////////Alert box */}

        <Alert alert={alert} />

        {/* //////////////////////////way to pass the props////////////////////////// */}
        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the text to analyze"
                  mode={mode}
                  alertvalue={alertvalue}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
