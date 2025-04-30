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

  // Set node size for all nodes
  for (const node of data.nodes) {
    node.size = 5;
  }

  return (
    <ResponsiveNetwork
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={10}
      centeringStrength={0.8}
      repulsivity={15}
      iterations={300}
      nodeColor={() => "green"}
      nodeBorderColor={() => "none"}
      linkColor={() => "gray"}
      animate={true}
    />
  );
};

export default Chart;
