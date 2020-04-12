import React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

const Chart = ({ data }) => {
  return (
    <ResponsiveSunburst
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      identity="name"
      value="count"
      cornerRadius={2}
      borderWidth={1}
      borderColor="white"
      colors={{ scheme: "nivo" }}
      childColor={{ from: "color" }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
    />
  );
};

export default Chart;
