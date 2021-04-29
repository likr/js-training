import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";
/*
const convertData = (input) => {
  //objのプロパティは{}付ける(多分
  const genders = Array.from(new Set(input.map(({ gender }) => gender)));
  //...はスプレッド構文,配列や文字列などの反復可能オブジェクトを、
  // 0 個以上の引数 (関数呼び出しの場合)などを期待された場所で展開したりできる
  const bin_max = Math.round(Math.max(...input.map(({ y }) => y)));
  const bin_min = Math.round(Math.min(...input.map(({ y }) => y)));
  //要素数nの配列をつくる Array.from({length:n})
  //引数の_は、いらない引数で二番目の引数のindexを使うから置いてるみたいな感じ
  const bins = Array.from({ length: bin_max - bin_min + 1 }).map((_, i) => {
    const obj = {
      bin: (bin_min + i).toString(), //目標のbinが文字列型だから変換
    };
    for (const gender of genders) {
      //各binに男性と女性の初期値0を設定してる
      //obj[プロパティ名]でもプロパティが参照できるっぽい(ブラケット記法?)
      obj[gender] = 0;
    }
    return obj;
  });
  for (const { y, gender } of input) {
    const i = Math.round(y) - bin_min;
    bins[i][gender] += 1;
  }
  return bins;
};*/

const convertData = (input) =>{
  const gender = Array.from(new Set(input.map((item)=>item.gender)));
  const y_max = Math.round(Math.max.apply([],input.map((item)=> item.y)))
  const y_min = Math.round(Math.min.apply([],input.map((item)=> item.y)))
  /*連番の生成：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from */
  const data =  Array.from({length:y_max-y_min+1}).map((_, i)=> {
    const obj = {"bin":y_min+i};
    for(const g of gender){
      obj[g] = 0;
    }
    return obj});
    input.map((item)=>{
    const i = Math.round(item.y)-y_min;
    data[i][item.gender] += 1;
  })
  return data;
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer05"
      convertData={convertData}
      dataUrl="data/size-and-weight.json"
      instruction={instruction}
      title="Lesson 05"
      Chart={Chart}
    />
  );
};

export default Lesson;
