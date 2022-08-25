import React from "react";
import { useState } from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setTextState] = useState("");
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    setTextState(e.target.value);
  }
  function handleUpClick() {
    let newUpperCaseText = text.toUpperCase();
    setTextState(newUpperCaseText);
    props.handleAlert("Upper Case is enabled!", "success");
  }
  function handleLowerClick() {
    let newLowerCaseText = text.toLowerCase();
    setTextState(newLowerCaseText);
    props.handleAlert("Lower Case is enabled!", "success");
  }
  function handleClearTextClick() {
    setTextState(" ");
    props.handleAlert("Text is cleared!", "success");
  }
  function handleConverToTweetClick() {
    let newSlicedText = text.slice(0, 189);
    setTextState(newSlicedText);
    props.handleAlert("Your text is sliced to be a tweet!", "success");
  }

  const handleDarkModeClick = () => {
    // 👇️ toggle
    // setIsActive(current => !current);

    // 👇️ or set to true
    setIsActive(true);

    document.h3.style.backgroundColor = "white";
  };
  return (
    <>
      <div className="container my-5">
        <div className="mb-3">
          <label htmlFor="Textarea" className="form-label">
            <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
              {props.textAreaTitle}
            </h3>
          </label>
          <textarea
            className="form-control my-3"
            id="Textarea"
            rows="8"
            style={{
              backgroundColor: isActive ? "black" : "white",
              color: isActive ? "white" : "black",
            }}
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="row">
          <div className="col-l-3 col-md-4 col-sm-12">
            <button
              type="button"
              className="btn btn-outline-primary my-2"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
          </div>
          <div className="col-l-3 col-md-4 col-sm-12">
            <button
              type="button"
              className="btn btn-outline-primary my-2"
              onClick={handleLowerClick}
            >
              Convert to Lowercase
            </button>
          </div>
          <div className="col-l-3 col-md-4 col-sm-12">
            <button
              type="button"
              className="btn btn-outline-primary my-2"
              onClick={handleConverToTweetClick}
            >
              Slice for Tweeting
            </button>
          </div>
          <div className="col-l-3 col-md-4 col-sm-12">
            <button
              type="button"
              className="btn btn-outline-primary my-2"
              onClick={handleDarkModeClick}
            >
              Enable Dark Mode
            </button>
          </div>
          <div className="col-l-3 col-md-4 col-sm-12">
            <button
              type="button"
              className="btn btn-outline-danger my-2"
              onClick={handleClearTextClick}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Text Summary
        </h3>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          It took {text.split(" ").length * 0.008} minutes to read your text.
        </p>
        <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h3>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text}
        </p>
      </div>
    </>
  );
}

// TextForm.defaultProps = {
//   text:'Default text'
// };
