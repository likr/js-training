import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart05";
import answer from "./answer.md";

const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender)));
  const min = Math.round(Math.min(...input.map(({ y }) => y)));
  const max = Math.round(Math.max(...input.map(({ y }) => y)));
  const bins = Array.from({ length: max - min + 1 }).map((_, i) => {
    const obj = {
      bin: (min + i).toString(),
    };
    for (const gender of genders) {
      obj[gender] = 0;
    }
    return obj;
  });
  for (const { y, gender } of input) {
    const i = Math.round(y) - min;
    bins[i][gender] += 1;
  }
  return bins;
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      lessonUrl="/lesson05"
      title="Lesson 05 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
