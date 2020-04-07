import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson09.json"
      answerUrl="/answer09"
      convertData={convertData}
      title="Lesson09"
      Chart={Chart}
    />
  );
};

export default Lesson;
