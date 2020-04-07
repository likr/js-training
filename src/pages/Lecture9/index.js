import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture9 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture9.json"
      convertData={convertData}
      title="Lecture9"
      Chart={Chart}
    />
  );
};

export default Lecture9;
