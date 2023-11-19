import { GoogleChartOptions } from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses", "Import"],
    ["2013", 1000, 400, 600],
    ["2014", 1170, 460, 70],
    ["2015", 660, 1120, 900],
    ["2016", 1030, 540, 500],
];

export const SimpleOptions:GoogleChartOptions = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0, title: "This", titleTextStyle: {color: "#ff0000"} },
    chartArea: { width: "70%", height: "70%" },
    backgroundColor: 'white',
    is3D: true
};


export const StackingAreaOptions = {
    title: "Stacking Area",
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    chartArea: {width: "70%", height: "70%"},
    vAxis: { minValue: 0 },
  };
  