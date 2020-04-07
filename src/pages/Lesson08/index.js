import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart08";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson08.json"
      answerUrl="/answer08"
      convertData={convertData}
      title="Lesson08"
      Chart={Chart}
    />
  );
};

export default Lesson;
