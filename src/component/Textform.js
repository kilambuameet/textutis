import React, { useState } from "react";
// import z from "./Navbar.js";
////////////////////////////////////////////////////////Convert text//////////////////////////////////////
export default function Textform(props) {
  const changeOnClick = () => {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alertvalue("Converted to Uppercase", "Success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const convertolower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertvalue("Converted to lowercase", "Success");
  };
  //////////////////////////////////////////////////////Clear text/////////////////////////////////////////

  const cleartext = () => {
    document.getElementById("message").value = "";
    // textarea.value = "";
  };
  // props.alertvalue("Textarea has been cleared", "Success");
  /////////////////////////////////////////////////////select text/////////////////////////////////////

  const textselect = () => {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    // window.clipboardData.setData(setext);
    props.alertvalue("Textarea has been selected", "Success");
  };

  //////////////////////////////////////////Dark mode//////////////////////////////////
  // const [Mymode, setMymode] = useState({
  //   color: "Dark",
  //   backgroundColor: "White",
  // });
  // const a = "Enable Darkmode";
  // const toggleStyle = () => {
  //   console.log("hello there");
  //   if (Mymode.color === "white") {
  //     setMymode({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext(a);
  //   } else {
  //     setMymode({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtntext("Enable Lightmode");
  //   }
  // };

  // const [btntext, setbtntext] = useState(a);
  // let myStyle = {
  //   color: "red",
  //   backgroundColor: "cyan",
  // };

  ////////////////////////////// ///////////////////////////////////////////////////////////
  const [text, setText] = useState("Enter the text here");
  console.log(props.mode);
  return (
    <div style={{ color: props.mode === "dark" ? "black" : "white" }}>
      <div>
        <div className="my-5">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "#b5a2a2" : "white",
            }}
            onChange={handleOnChange}
            rows="8"
            // name="textareavalue"
            id="message"
          ></textarea>
        </div>
        <button
          disabled={text.length <= 0}
          className="btn btn-primary mx-1 my-1"
          onClick={changeOnClick}
        >
          convert to Upper Case
        </button>
        <button
          disabled={text.length <= 0}
          className="btn btn-success mx-1 my-1 "
          onClick={convertolower}
        >
          convert to lower Case
        </button>
        <button
          disabled={text.length <= 0}
          className="btn btn-dark mx-1 my-1"
          onClick={cleartext}
        >
          clear text
        </button>
        <button
          disabled={text.length <= 0}
          className="btn btn-danger mx-1 my-1"
          onClick={textselect}
        >
          Select text
        </button>
      </div>
      <div className="container my-5">
        <h1>Your text Summery</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>

        <h2>Your text Preview</h2>
        <p>{text.length !== 0 ? text : "Nothing to preview"}</p>

        {/* <div className="container">
          <button className="btn btn-primary" onClick={toggleStyle}>
            {btntext}
          </button>
        </div> */}
      </div>
      {/* console.log(z); */}
    </div>
  );
}