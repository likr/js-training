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

const convertData = (input) => {
  // setはオブジェクトダメだから配列に←setで重複してるのを省く←mapで種類名だけにしたやつ
  const species = Array.from(new Set(input.map(({ species }) => species)));
  //種類ごとでreturnしたい
  return species.map((species) => {
    //中身
    return {
      id: species,
      data: input //inputのデータの中でspeciesが一致するものをfilterでひろう
        .filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};

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
