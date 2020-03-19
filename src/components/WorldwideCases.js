import React from "react";
import { Chart } from "react-google-charts";
import { formatWorldWideCasesChartData } from "../utils";

function WorldWideCases({ data }) {
  
  return (
    <Chart
      height={"400px"}
      width={"90%"}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={formatWorldWideCasesChartData(data)}
      options={{
        title: "Top 10 Affected Countries",
        chartArea: { width: "90%" },
        isStacked: true,
        hAxis: {
          title: "People Affected",
          minValue: 0
        },
        vAxis: {
          title: "Country"
        }
      }}
    />
  );
}
export default WorldWideCases;
