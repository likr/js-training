import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture2 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture2.json"
      convertData={convertData}
      title="Lecture2"
      Chart={Chart}
    />
  );
};

export default Lecture2;
