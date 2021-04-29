import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart09";
import instruction from "./instruction.md";


const convertData = (input) => {
  const ministries = Array.from(new Set(input.map((item)=>item.ministry)));
  const bureaues = Array.from(new Set(input.map((item) => item.bureau)));
  const departments = Array.from(new Set(input.map((item) => item.department)));
  const p = Math.floor(input.length / 100)
  
  //数える箱作り
  const count = []
  for (const m of ministries) {
    count[m] = {}
    for (const b of bureaues) {
      count[m][b] = {}
      for (const d of departments) {
        count[m][b][d] = 0
      }
      count[m][b]["その他"] = 0
      count[m][b]["カウント"] = 0
    }
    count[m]["その他"] = 0
  }

  //数える
  for (const item of input) {
    count[item.ministry][item.bureau][item.department] += 1
  }

  //ポイント作り
  for (const m of ministries) {
    let total_c = 0;
    for (const b of bureaues) {
      let c = 0;
      let k = 0;
      for (const d of departments) {
        if (count[m][b][d] <= p) {
          c += count[m][b][d]
        } else {
          k += 1
        }
      }
      count[m][b]["その他"] = c
      count[m][b]["カウント"] = k
      if (count[m][b]["その他"] > 0 && count[m][b]["その他"] <= p) {
        total_c += c
      }
    }
    count[m]["その他"] = total_c;
  }

  //データの形を作る
  const data = []
  for (const m of ministries) {
    const obj = { "name": m, "children": [] }
    if (count[m]["その他"] > 0) {
      obj.children.push({ "name": "その他", "count": count[m]["その他"] })
    }
    for (const b of bureaues) {
        if (count[m][b]["カウント"] > 0 || count[m][b]["その他"] > p  ) {
          obj.children.push({ "name": b, "children": [] })
          const i = obj.children.findIndex(({ name }) => name === b);
          for (const d of departments) {
            if (count[m][b][d] > 0 && count[m][b][d] > p) {
              obj.children[i]["children"].push({ "name": d, "count": count[m][b][d] })
            }
          }
          obj.children[i]["children"].push({ "name": "その他", "count": count[m][b]["その他"] })
        }
    }
    data.push(obj)
  }
  return { children: data }; 
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer09"
      convertData={convertData}
      dataUrl="data/judgit-departments.json"
      instruction={instruction}
      title="Lesson 09"
      Chart={Chart}
    />
  );
};

export default Lesson;
