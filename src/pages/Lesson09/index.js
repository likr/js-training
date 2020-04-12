import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";
import instruction from "./instruction.md";

const convertData = (input) => {
  return { children: [] }; // ここを作りましょう！
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer09"
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      instruction={instruction}
      title="Lesson 09"
      Chart={Chart}
    />
  );
};

export default Lesson;
