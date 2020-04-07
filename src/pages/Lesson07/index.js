import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart07";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson07.json"
      answerUrl="/answer07"
      convertData={convertData}
      title="Lesson07"
      Chart={Chart}
    />
  );
};

export default Lesson;
