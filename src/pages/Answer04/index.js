import React from "react";
import AnswerPage from "../../components/AnswerPage";
import Chart from "../../components/Chart04";
import answer from "./answer.md";

const convertData = (input) => {
  const species = Array.from(new Set(input.map(({ species }) => species)));
  return species.map((species) => {
    return {
      id: species,
      data: input
        .filter((item) => item.species === species)
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
    };
  });
};

const Answer = () => {
  return (
    <AnswerPage
      answer={answer}
      dataUrl="data/iris.json"
      convertData={convertData}
      lessonUrl="/lesson04"
      title="Lesson 04 - Answer"
      Chart={Chart}
    />
  );
};

export default Answer;
