import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture4 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture4.json"
      convertData={convertData}
      title="Lecture4"
      Chart={Chart}
    />
  );
};

export default Lecture4;
