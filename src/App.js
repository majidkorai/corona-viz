import React, { useEffect, useState } from "react";
import MapView from "./MapView";
import axios from "axios";
import { default as countries } from "./countries.json";
import "tui-chart/dist/tui-chart.css";
import "tui-chart/dist/maps/world";
import "./App.css";
import WorldWideCases from "./components/WorldwideCases";
import MapViewGoogle from "./components/MapView";
import PieChartView from "./components/PieChart";
import OverView from "./components/Overview";
import { formatTableViewData } from "./utils";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
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
  const override = css`
    display: block;
    margin: 0 auto;
    padding-top: 50px;
    border-color: red;
  `;

  return (
    <div style={styles}>
      <h1>Coronavirus (COVID-19) Global Statistics</h1>
      {!isFetching && (
        <div style={flexContainer}>
          <OverView data={allData}></OverView>
          <MapViewGoogle data={allData}></MapViewGoogle>
          <PieChartView data={allData}></PieChartView>
          <WorldWideCases data={allData}></WorldWideCases>
          <div className="tableView">
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
                {formatTableViewData(allData).map((c, index) => (
                  <tr key={index}>
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
      {isFetching && (
        <ScaleLoader
          css={override}
          size={35}
          color={"#123abc"}
          loading={isFetching}
        />
      )}
    </div>
  );
}

export default App;
