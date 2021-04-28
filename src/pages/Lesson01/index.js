import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart01";
import instruction from "./instruction.md";

/*
const convertData = (input) => {
  return []; // ここを作りましょう！
};*/

const convertData = (input) => {
  const data = input.map(([name, value])=> ({"name": name, "count":value}));
  return data;
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer01"
      convertData={convertData}
      dataUrl="data/chs-capacity.json"
      instruction={instruction}
      title="Lesson 01"
      Chart={Chart}
    />
  );
};

export default Lesson;
