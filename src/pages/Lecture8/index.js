import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture8 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture8.json"
      convertData={convertData}
      title="Lecture8"
      Chart={Chart}
    />
  );
};

export default Lecture8;
