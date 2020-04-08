import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Chart = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["男性", "女性"]}
      indexBy="bin"
      margin={{ top: 40, right: 20, bottom: 120, left: 60 }}
      padding={0.3}
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
        legend: "count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -20,
          itemsSpacing: 2,
          itemWidth: 60,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default Chart;
