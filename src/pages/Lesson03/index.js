import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart03";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson03.json"
      answerUrl="/answer03"
      convertData={convertData}
      title="Lesson03"
      Chart={Chart}
    />
  );
};

export default Lesson;
