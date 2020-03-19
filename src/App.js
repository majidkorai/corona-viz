import React, { useEffect, useState } from "react";
import MapView from "./MapView";
import MapViewGoogle from "./components/MapView";
import axios from "axios";
import { default as countries } from "./countries.json";
import "tui-chart/dist/tui-chart.css";
import "tui-chart/dist/maps/world";
import "./App.css";
import TuiChart from "tui-chart";
import WorldWideCases from "./components/WorldwideCases";
import { formatTableViewData } from "./utils";

function App() {
  const theme = {
    series: {
      startColor: "#ffefef",
      endColor: "#ac4142",
      overColor: "#75b5aa"
    }
  };
  TuiChart.registerTheme("theme", theme);
  const [allData, setAllData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const result = await axios(
        "https://coronavirus-tracker-api.herokuapp.com/all"
      );
      setAllData(result.data);
      setIsFetching(false);
    };
    fetchData();
  }, []);
  let styles = {
    margin: "10px",
    textAlign: "center"
  };
  let flexContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };
  return (
    <div style={styles}>
      <h1>Coronavirus (COVID-19) Global Statistics</h1>
      {!isFetching && (
        <div style={flexContainer}>
          <MapViewGoogle data={allData}></MapViewGoogle>
          <WorldWideCases data={allData}></WorldWideCases>
          <div className='tableView'>
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Confirmed Cases</th>
                  <th>Recovered Cases</th>
                  <th>Deaths</th>
                </tr>
              </thead>
              <tbody>
                {formatTableViewData(allData).map(c => (
                  <tr>
                    <td>{c.country}</td>
                    <td>{c.confirmed.toLocaleString()}</td>
                    <td>{c.recovered.toLocaleString()}</td>
                    <td>{c.deaths.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
