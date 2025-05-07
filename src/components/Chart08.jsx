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
      centeringStrength={0.5}
      repulsivity={15}
      distanceMin={30}
      distanceMax={150} // Set maximum distance between connected nodes
      iterations={500} // Increased for better layout stability
      nodeColor={() => "green"}
      nodeBorderColor={() => "none"}
      linkColor={() => "gray"}
      animate={true}
      motionConfig={{
        mass: 2,
        tension: 170,
        friction: 30,
        clamp: true,
        precision: 0.01,
        velocity: 0,
      }}
    />
  );
};

export default Chart;
