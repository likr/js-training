import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md?raw";

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

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
