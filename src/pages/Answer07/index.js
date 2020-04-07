import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart07";
import answer from "./answer.md";

const convertData = (input) => {
  return input;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      lessonUrl="/lesson07"
      title="Lesson 07 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
