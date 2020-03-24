import React from "react";
import { Chart } from "react-google-charts";
import { formatOverViewData } from "../utils";
function OverView({ data }) {
  return (
    <Chart
      width={"90%"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={formatOverViewData(data)}
      options={{
        legend: { position: 'bottom' },
        chartArea: {
          width: '100%'
        },
        pieSliceText: "percentage",
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}

export default OverView;
