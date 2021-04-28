import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart02";
import instruction from "./instruction.md";

const convertData = (input) => {
  /*https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*/ 
  const data = input.sort((a, b)=>b.count-a.count);//a,b逆だと小さい順
  return data.slice(0, 20);
};

const Lesson = () => {
  return (
    <LessonPage
      dataUrl="data/qiita-tags.json"
      answerUrl="/answer02"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 02"
      Chart={Chart}
    />
  );
};

export default Lesson;
