import React from "react";
import { Chart } from "react-google-charts";
import { formatPieChartData } from "../utils";
function PieChartView({ data }) {
  return (
    <Chart
      width={"90%"}
      height={"350px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={formatPieChartData(data)}
      options={{
        // title: "Country Wise Cases",
        // legend: 'none',
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default PieChartView;
