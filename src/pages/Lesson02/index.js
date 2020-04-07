import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson02.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson02"
      Chart={Chart}
    />
  );
};

export default Lesson;
