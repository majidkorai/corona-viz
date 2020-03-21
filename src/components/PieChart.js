import React from "react";
import { Chart } from "react-google-charts";
import { formatPieChartData } from "../utils";
function PieChartView({ data }) {
  return (
    <Chart
      width={"90%"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={formatPieChartData(data)}
      options={{
        // title: "Country Wise Total Cases",
        legend: 'none',
        pieSliceText: 'label',
        sliceVisibilityThreshold: 0.03
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default PieChartView;
