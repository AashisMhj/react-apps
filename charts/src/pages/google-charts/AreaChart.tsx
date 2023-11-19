import { Chart } from "react-google-charts";
import { data, SimpleOptions, StackingAreaOptions } from "./data";


export default function AreaChart() {
    return (<div className="text-center text-xl">
        <section>
            <h2>Simple Area Chart</h2>
            <Simple />
        </section>
        <section>
            <h2>Stacking Area</h2>
            <StackingArea />
        </section>
    </div>)
}

function Simple() {
    return <Chart chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={SimpleOptions}
    />
}

function StackingArea() {
    return <Chart chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={StackingAreaOptions}
    />
}