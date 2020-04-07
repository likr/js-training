import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart02";
import answer from "./answer.md";

const convertData = (input) => {
  input.sort((item1, item2) => item2.count - item1.count);
  return input.slice(0, 20);
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      dataUrl="data/qiita-tags.json"
      convertData={convertData}
      lessonUrl="/lesson02"
      title="Lesson 02 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
