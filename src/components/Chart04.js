import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const Chart = ({ data }) => {
  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 60, right: 40, bottom: 70, left: 90 }}
      xScale={{ type: "linear", min: "auto", max: "auto" }}
      xFormat={(e) => {
        return e + " kg";
      }}
      yScale={{ type: "linear", min: "auto", max: "auto" }}
      yFormat={(e) => {
        return e + " cm";
      }}
      blendMode="multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Sepal Length",
        legendPosition: "middle",
        legendOffset: 46,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Petal Width",
        legendPosition: "middle",
        legendOffset: -60,
      }}
      legends={[
        {
          anchor: "top-left",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -30,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
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
    />
  );
};

export default Chart;
