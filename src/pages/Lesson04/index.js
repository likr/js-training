import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

/*
const convertData = (input) => {
  const obj = [
    {
      id: String,
      data: [
        {
          x: Number,
          y: Number,
        },
      ],
    },
  ];
  return obj; // ここを作りましょう！
};*/

const convertData = (input)=>{
  //名前を取ってきてセットで重複を削除, 種類の配列データを作る
  const species_name = Array.from(new Set(input.map((item)=>item.species)));
  //種類->それに当てはまるもののデータの変形のループを回す
  const data = species_name.map((species)=>{return{"id":species, "data":input.filter((item)=>item.species===species).map((item)=>({"x":item.sepalLength, "y":item.petalWidth}))}})
  console.log(data)
  return data;
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
