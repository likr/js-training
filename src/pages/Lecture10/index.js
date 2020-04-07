import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture10 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture10.json"
      convertData={convertData}
      title="Lecture10"
      Chart={Chart}
    />
  );
};

export default Lecture10;
