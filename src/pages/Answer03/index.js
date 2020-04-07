import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart03";
import answer from "./answer.md";

const convertData = (input) => {
  return input.filter((item) => item.gender === "男性");
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      dataUrl="data/size-and-weight.json"
      convertData={(input) => {
        return [
          {
            id: "男性",
            data: convertData(input),
          },
        ];
      }}
      lessonUrl="/lesson03"
      title="Lesson 03 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
