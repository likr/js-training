import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart10";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson10.json"
      answerUrl="/answer10"
      convertData={convertData}
      title="Lesson10"
      Chart={Chart}
    />
  );
};

export default Lesson;
