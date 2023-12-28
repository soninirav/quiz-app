import React from "react";

const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        onClick={() =>
          dispatch({
            type: "start",
          })
        }
        className="btn btn-ui"
      >
        Lets Start
      </button>
    </div>
  );
};

export default StartScreen;
