import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart01";
import answer from "./answer.md";

const convertData = (input) => {
  return input.map(([name, count]) => ({
    name,
    count,
  }));
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      dataUrl="data/chs-capacity.json"
      convertData={convertData}
      lessonUrl="/lesson01"
      title="Lesson 01 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
