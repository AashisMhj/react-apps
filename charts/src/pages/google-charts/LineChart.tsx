import { Chart } from "react-google-charts";

const k1_starting_point = 0;
const k1_jumping_distance = 3;
const k2_starting_point = 4;
const k2_jumping_distance = 2;
const k3_starting_point = 3;
const k3_jumping_point = 3;


const line_data:Array<Array<number>> = [];

Array(10).fill(0).reduce((prev:Array<number>, current:Array<number>, index:number)=> {
    line_data.push([
        index,
        prev[0],
        prev[1],
        prev[2]
    ]);
    return [prev[0]+k1_jumping_distance, prev[1]+k2_jumping_distance, prev[2]+k3_jumping_point]
}, [k1_starting_point, k2_starting_point, k3_starting_point]);

console.log(line_data);
const data = [
  [
    "JUMP",
    "Kangaroo 1",
    "Kangaroo 2",
    "Kangaroo 3",
  ],
  ...line_data
];
const options = {
  chart: {
    title: "Jumping Kangaroo",
    subtitle: "Check if jumping kangaroo meet or not",
  },
};

export default function LineChartPage() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
