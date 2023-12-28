import React from "react";
import Options from "./Options";

const Question = ({ currentQuestion, dispatch, answer, points }) => {
  const { question, options, correctOption, questionPoint } = currentQuestion;
  return (
    <div>
      <h4>{question}</h4>
      <Options
        options={options}
        correctOption={correctOption}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export default Question;
