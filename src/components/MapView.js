import React from "react";
import { Chart } from "react-google-charts";
import { formatMapViewData } from "../utils";
function MapView({ data }) {
  return (
    <Chart
       height={"400px"}
      width={"80%"}
      chartType="GeoChart"
      data={formatMapViewData(data)}
      options={{
        chartArea: { width: "100%" },
        colorAxis: { colors: ["#FFDFA5", "#FF0000"] }
      }}
      mapsApiKey="AIzaSyAmWei1h0Q6BXMh_4K-22FibghqjqBHWU4"
    />
  );
}

export default MapView;
