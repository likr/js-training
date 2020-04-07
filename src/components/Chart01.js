import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Chart = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["count"]}
      indexBy="name"
      margin={{ top: 20, right: 20, bottom: 120, left: 60 }}
      padding={0.3}
      groupMode="grouped"
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 60,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "定員",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default Chart;
