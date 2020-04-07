import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture3 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture3.json"
      convertData={convertData}
      title="Lecture3"
      Chart={Chart}
    />
  );
};

export default Lecture3;
