import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture1 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture1.json"
      convertData={convertData}
      title="Lecture1"
      Chart={Chart}
    />
  );
};

export default Lecture1;
