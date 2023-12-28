import React from "react";

export const FinishedScreen = ({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage > 0 && percentage < 50) emoji = "🧐";
  if (percentage === 0) emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> out of {maxPossiblePoints}.
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart Quiz
      </button>
    </>
  );
};
