import React, { useEffect, useState } from "react";
import MapView from "./MapView";
import axios from "axios";
import { default as countries } from "./countries.json";
import "tui-chart/dist/tui-chart.css";
import "tui-chart/dist/maps/world";
import "./App.css";
import TuiChart from "tui-chart";
import { generateSeries } from "./utils";

function App() {
  const theme = {
    series: {
      startColor: "#ffefef",
      endColor: "#ac4142",
      overColor: "#75b5aa"
    }
  };
  TuiChart.registerTheme("theme", theme);
  const [confirmedData, setConfirmed] = useState({
    data: { series: countries.data }
  });
  const [deathsData, setDeaths] = useState({
    data: { series: countries.data }
  });
  const [recoveredData, setRecovered] = useState({
    data: { series: countries.data }
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://coronavirus-tracker-api.herokuapp.com/all"
      );
      console.log(result.data);
      let confirmed = generateSeries(
        result.data.confirmed.locations,
        countries
      );
      setConfirmed({ data: { series: confirmed } });
      let deaths = generateSeries(result.data.deaths.locations, countries);
      setDeaths({ data: { series: deaths } });
      let recovered = generateSeries(result.data.recovered.locations, countries);
      setRecovered({ data: { series: recovered } });
    };
    fetchData();
  }, []);
  let styles = {
    margin: "10px",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <h1>Coronavirus (COVID-19) Global Statistics</h1>
      <MapView data={confirmedData.data} category={"confirmed"}></MapView>
      <MapView data={deathsData.data} category={"deaths"}></MapView>
      <MapView data={recoveredData.data} category={"recovered"}></MapView>
    </div>
  );
}

export default App;
