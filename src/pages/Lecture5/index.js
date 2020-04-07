import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture5 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture5.json"
      convertData={convertData}
      title="Lecture5"
      Chart={Chart}
    />
  );
};

export default Lecture5;
