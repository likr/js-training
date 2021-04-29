import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart06";
import instruction from "./instruction.md";

/* 2020
const convertData = (input) => {
  const data = Array.from(
    input.map(({ gender, y, x }) => {
      let col;
      if (gender === "男性") {
        col = "blue";
      } else {
        col = "red";
      }
      const obj = {
        color: col,
        gender: gender,
        bmi: (x / (y * y)) * 10000,
        weight: x,
        height: y,
      };
      return obj;
    })
  );
  return data;
};
*/
/* 模範解答
const convertData = (input) =>{
  const colors = { //colorでgenderをkeyで取れるようにobj作る
    男性: "blue",
    女性: "red"
  };
  return input.map(({gender, x, y})=>{
    return{
      color: colors[gender],
      gender,
      bmi: x/(y/100)**2,
      weight: x,
      height: y,
    };
  });
};*/

const convertData = (input)=>{
  const color ={
    "男性":"blue",
    "女性":"red"
  }
  const data = input.map((item)=>({"color":color[item.gender],gender:item.gender, "bmi":item.x/(item.y/100)**2, "weight":item.x, "height":item.y}))
  return data;
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer06"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 06"
      Chart={Chart}
    />
  );
};

export default Lesson;
