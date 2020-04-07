import React from "react";
import LecturePage from "../../components/LecturePage";

const convertData = () => {
  // ここを作りましょう！
  return [];
};

const Chart = ({ data }) => {
  return null;
};

const Lecture6 = () => {
  return (
    <LecturePage
      dataUrl="data/lecture6.json"
      convertData={convertData}
      title="Lecture6"
      Chart={Chart}
    />
  );
};

export default Lecture6;
