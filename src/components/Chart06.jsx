import React from "react";
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";

// Custom tooltip component
const CustomTooltip = ({ variable, value, datum }) => {
  const tooltipStyle = {
    background: 'white',
    padding: '9px 12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '16px',
    color: '#333'
  };
  
  return (
    <div style={tooltipStyle}>
      {datum.data && (
        <div>
          <div style={{ marginBottom: '5px' }}>
            <strong>性別:</strong> {datum.data.gender}
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>BMI:</strong> {datum.data.bmi.toFixed(2)}
          </div>
          <div style={{ marginBottom: '5px' }}>
            <strong>体重:</strong> {datum.data.weight} kg
          </div>
          <div>
            <strong>身長:</strong> {datum.data.height} cm
          </div>
        </div>
      )}
    </div>
  );
};

const Chart = ({ data }) => {
  // Map gender values to numeric values and add id to each data item
  const dataWithIds = data.map((item, index) => ({
    ...item,
    id: index.toString(),
    genderValue: item.gender === "男性" ? 1 : 0,
  }));

  // console.log(dataWithIds);
  
  return (
    <ResponsiveParallelCoordinates
      data={dataWithIds}
      colors={{ datum: "color" }}
      tooltip={CustomTooltip}
      variables={[
        {
          id: "性別",
          value: "genderValue",
          min: -1,
          max: 2,
          ticksPosition: "before",
          legend: "性別",
          legendPosition: "middle",
          legendOffset: 10,
          tickValues: [0, 1],
          tickFormat: value => value === 1 ? "男性" : "女性",
          tooltipFormat: value => value === 1 ? "男性" : "女性",
        },
        {
          id: "BMI",
          value: "bmi",
          min: "auto",
          max: "auto",
          ticksPosition: "before",
          legendPosition: "middle",
          legendOffset: 10,
        },
        {
          id: "体重",
          value: "weight",
          min: "auto",
          max: "auto",
          ticksPosition: "before",
          legend: "体重",
          legendPosition: "middle",
          legendOffset: 10,
        },
        {
          id: "身長",
          value: "height",
          min: "auto",
          max: "auto",
          legend: "身長",
          legendPosition: "middle",
          ticksPosition: 'after',
          legendOffset: -10,
        },
      ]}
      lineWidth={3}
      lineOpacity={0.1}
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      animate={true}
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
