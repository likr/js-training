import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson06.json"
      answerUrl="/answer06"
      convertData={convertData}
      title="Lesson06"
      Chart={Chart}
    />
  );
};

export default Lesson;
