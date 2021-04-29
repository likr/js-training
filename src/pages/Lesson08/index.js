import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart08";
import instruction from "./instruction.md";

const convertData = (input) => {
  //item.tagで２重ループ回した時ダブらないように順番揃えておく
  for (const item of input) {
    item.tags.sort();
  }

  //tagの取り出し
  const tags_array = input.map((item) => (item.tags.map((x) => x)))
  const tags = Array.from(new Set(Array.prototype.concat.apply([], tags_array)));
  
  //ペアの生成
  const pare = []
  for (const t of tags) {
    pare[t] = {}
    for (const t2 of tags) {
      pare[t][t2] = 0
    }
  }
 
  for (const item of tags_array) {
    for (let i = 0; i < item.length; i++) {
      for (let j = i + 1; j < item.length; j++) {
        pare[item[i]][item[j]] += 1
      }
    }
  }
  

  const node_data = [];
  const link_data = [];
  for (const t1 of tags){
    for (const t2 of tags){
      if (pare[t1][t2] >= 2) {
        node_data.push(t1)
        node_data.push(t2)
        link_data.push({"source":t1, "target":t2})
      }
    }
  }
  const nodes_data = Array.from(new Set(node_data)).map((x) => { return ({ "id":x})})
  
 
  return { nodes: nodes_data, links: link_data }; // ここを作りましょう！
};

/*
const convertData = (input) => {
  for (const item of input) {
    item.tags.sort();
  }

  const tagSet = new Set();
  for (const item of input) {
    for (const tag of item.tags) {
      tagSet.add(tag);
    }
  }
  const tags = Array.from(tagSet);

  const count = {};
  for (const tag1 of tags) {
    count[tag1] = {};
    for (const tag2 of tags) {
      count[tag1][tag2] = 0;
    }
  }

  for (const item of input) {
    const n = item.tags.length;
    for (let j = 0; j < n; ++j) {
      for (let i = 0; i < j; ++i) {
        count[item.tags[i]][item.tags[j]] += 1;
      }
    }
  }

  const links = [];
  for (const tag1 of tags) {
    for (const tag2 of tags) {
      if (count[tag1][tag2] >= 2) {
        links.push({
          source: tag1,
          target: tag2,
        });
      }
    }
  }
  const nodeSet = new Set();
  for (const { source, target } of links) {
    nodeSet.add(source);
    nodeSet.add(target);
  }
  

  const nodes = Array.from(nodeSet).map((tag) => {
    return {
      id: tag,
    };
  });

  console.log(nodes)
  console.log(links)

  return {
    nodes,
    links,
  };
};

*/
const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer08"
      convertData={convertData}
      dataUrl="data/qiita-articles.json"
      instruction={instruction}
      title="Lesson 08"
      Chart={Chart}
    />
  );
};

export default Lesson;
