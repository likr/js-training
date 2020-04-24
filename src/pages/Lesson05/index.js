import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart05";
import instruction from "./instruction.md";

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
};

/*始めかいたやつ　間抜けてる　警告出てる
const convertData = (input) => {
  const height = Array.from(new Set(input.map((item) => Math.round(item.y))));
  height.sort();
  return height.map((height) => {
    let man = 0;
    let woman = 0;
    for (let item of input) {
      if (Math.round(item.y) === height) {
        if (item.gender === "男性") {
          man += 1;
        } else {
          woman += 1;
        }
      }
    }
    return {
      bin: height,
      男性: man,
      女性: woman,
    };
  });
};*/

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
