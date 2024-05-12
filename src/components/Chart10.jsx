import React from "react";
import { ResponsiveNetwork } from "@nivo/network";

const cmp = (v1, v2) => {
  if (v1 === v2) {
    return 0;
  } else if (v1 > v2) {
    return 1;
  } else {
    return -1;
  }
};

const Chart = ({ data }) => {
  data.nodes.sort((node1, node2) => cmp(node1.id, node2.id));
  data.links.sort((link1, link2) => {
    if (cmp(link1.source, link2.source) === 0) {
      return cmp(link1.target, link2.target);
    } else {
      return cmp(link1.source, link2.source);
    }
  });
  return (
    <ResponsiveNetwork
      nodes={data.nodes}
      links={data.links}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={() => 50}
      repulsivity={50}
      iterations={300}
      nodeColor={(node) => node.color}
      nodeBorderColor={() => "none"}
      linkColor={() => "gray"}
      motionStiffness={160}
      motionDamping={12}
    />
  );
};

export default Chart;
