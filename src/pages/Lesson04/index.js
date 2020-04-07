import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";

const convertData = (input) => {
  // ここを作りましょう！
  return [];
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/lesson04.json"
      answerUrl="/answer04"
      convertData={convertData}
      title="Lesson04"
      Chart={Chart}
    />
  );
};

export default Lesson;
