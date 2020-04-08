import React from "react";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";

const Chart = ({ data }) => {
  return (
    <ResponsiveParallelCoordinates
      data={data}
      colors={{ datum: "color" }}
      variables={[
        {
          key: "gender",
          type: "point",
          padding: 1,
          values: ["女性", "男性"],
          ticksPosition: "before",
          legend: "性別",
          legendPosition: "middle",
          legendOffset: 10,
        },
        {
          key: "bmi",
          type: "linear",
          min: "auto",
          max: "auto",
          ticksPosition: "before",
          legend: "BMI",
          legendPosition: "middle",
          legendOffset: 10,
        },
        {
          key: "weight",
          type: "linear",
          min: "auto",
          max: "auto",
          ticksPosition: "before",
          legend: "体重",
          legendPosition: "middle",
          legendOffset: 10,
        },
        {
          key: "height",
          type: "linear",
          min: "auto",
          max: "auto",
          legend: "身長",
          legendPosition: "middle",
          legendOffset: -10,
        },
      ]}
      axesPlan="foreground"
      strokeWidth={3}
      lineOpacity={0.1}
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      animate={true}
      motionStiffness={90}
      motionDamping={12}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "rgb(136, 158, 174)",
              strokeWidth: 2,
            },
          },
          ticks: {
            line: {
              stroke: "rgb(136, 158, 174)",
              strokeWidth: 2,
            },
          },
        },
      }}
    />
  );
};

export default Chart;
