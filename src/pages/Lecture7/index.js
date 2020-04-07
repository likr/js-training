import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture7 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture7.json"
      convertData={convertData}
      title="Lecture7"
      Chart={Chart}
    />
  );
};

export default Lecture7;
