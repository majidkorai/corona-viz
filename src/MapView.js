import React from "react";
import { getMapTitle } from "./utils";
import { MapChart } from "@toast-ui/react-chart";

function MapView({ category, data }) {
  const options = {
    chart: {
      width: 1100,
      height: 700,
      title: getMapTitle(category),
      format: "1,000"
    },
    map: "world",
    legend: {
      align: "bottom"
    }
  };
  return <MapChart data={data} options={options} />;
}

export default MapView;
