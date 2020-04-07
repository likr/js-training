import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart08";
import answer from "./answer.md";

const convertData = (input) => {
  return input;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      lessonUrl="/lesson08"
      title="Lesson 08 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
