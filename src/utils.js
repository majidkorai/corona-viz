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
