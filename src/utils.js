export function generateSeries(mapData, countries) {
  return countries.map(country => {
    const locations = mapData.filter(l => l.country_code === country.code);
    let totalCases = 0;
    if (locations.length)
      totalCases = locations.reduce((a, b) => {
        return a + Number(b.latest);
      }, 0);
    const data = {
      code: country.code,
      data: totalCases
    };
    return data;
  });
}

export function getMapTitle(category) {
  switch (category) {
    case "confirmed":
      return "Total Confirmed Cases";
    case "latest":
      return "Latest";
    case "recovered":
      return "Total Recovered";
    case "deaths":
      return "Total Deaths";
    default:
      return "Corona virus confirmed cases";
  }
}

export function formatWorldWideCasesChartData(data) {
  let chartData = getGroupedData(data);
  console.log(chartData);
  chartData.sort(function(a, b) {
    return b.confirmed - a.confirmed;
  });
  let transformedData = chartData.slice(0, 5).map(c => {
    return [c.country, c.confirmed, c.deaths, c.recovered];
  });
  return [
    ["Country", "Confirmed Cases", "Deaths", "Recovered"],
    ...transformedData
  ];
}
export function formatPieChartData(data) {
  let chartData = getGroupedData(data);
  let transformedData = chartData.map(c => {
    return [c.country, c.confirmed];
  });
  return [
    ['Country', 'Cases'],
    ...transformedData
  ];
}

export function formatTableViewData(data) {
  let chartData = getGroupedData(data);
  chartData.sort(function(a, b) {
    return b.confirmed - a.confirmed;
  });
  return chartData;
}

export function formatMapViewData(data) {
  let chartData = getGroupedData(data);
  chartData.sort(function(a, b) {
    return b.confirmed - a.confirmed;
  });
  let transformedData = chartData.map(c => {
    return [c.country, c.confirmed];
  });
  return [["Country", "Cases"], ...transformedData];
}

function getCount(groupedDeaths, countryCode) {
  const totalCases = groupedDeaths.get(countryCode).reduce((a, b) => {
    return a + Number(b.latest);
  }, 0);
  return totalCases;
}

function getGroupedData(data) {
  let groupedData = [];
  const groupedConfirmed = groupBy(
    data.confirmed.locations,
    l => l.country_code
  );
  const groupedDeaths = groupBy(data.deaths.locations, l => l.country_code);
  const groupedRecovered = groupBy(
    data.recovered.locations,
    l => l.country_code
  );
  groupedConfirmed.forEach((v, k) => {
    groupedData.push({
      country: v[0].country,
      deaths: getCount(groupedDeaths, k),
      confirmed: getCount(groupedConfirmed, k),
      recovered: getCount(groupedRecovered, k)
    });
  });
  return groupedData;
}

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
