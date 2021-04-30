import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart10";
import instruction from "./instruction.md";


const convertData = (input) => {
  const count = []
  for (const item of input["nodes"]) {
    count[item.id] = 0
  }
  for (const item of input["links"]) {
    count[item["source"]] += 1;
    count[item["target"]] += 1;
  }

  const f_max = Math.max.apply([],input["nodes"].map((item) => item.frequency));
  const node_data = input["nodes"].filter((item) => count[item.id] > 1)
  const link_data = input["links"].filter((item) => count[item.source] > 1 && count[item.target] > 1)
  
  //福島がソースのやつのターゲットを取ってくる
  const dd = link_data.filter((item) => item.source === "福島").map((x) => x.target)
  dd.push("福島")

  const node_data2 = node_data.map((d) => {
    let color = "blue";
    if (dd.includes(d.id)) {
      color = "red"
    }
    //単にパーセントに半径かけると極端すぎちゃうからルート取ってる
    return ({
      "frequency": d.frequency, "id": d.id, "radius":  Math.sqrt(d.frequency/f_max)*20, "color":color
    })
  })
  return { nodes: node_data2, links: link_data }; 
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer10"
      convertData={convertData}
      dataUrl="data/topic-graph.json"
      instruction={instruction}
      title="Lesson 10"
      Chart={Chart}
    />
  );
};

export default Lesson;
