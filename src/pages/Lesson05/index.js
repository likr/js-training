import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson05.json"
      answerUrl="/answer05"
      convertData={convertData}
      title="Lesson05"
      Chart={Chart}
    />
  );
};

export default Lesson;
