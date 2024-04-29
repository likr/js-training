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
        legend: "体重",
        legendPosition: "middle",
        legendOffset: 46,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "身長",
        legendPosition: "middle",
        legendOffset: -60,
      }}
    />
  );
};

export default Chart;
