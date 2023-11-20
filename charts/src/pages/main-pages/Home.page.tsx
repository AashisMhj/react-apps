import { ReactNode } from "react"
import { Link } from "react-router-dom"

type ExistValueType = {
    exist: true,
    link: string
}
type NotExistType = {
    exist: false
}

type DontKnowType = {
    exist: null
}
type ValueType = ExistValueType | NotExistType | DontKnowType
type ChartKeys = keyof ChartTypes;


interface ChartTypes {
    AreaChart: ValueType,
    Bar: ValueType,
    Bubble: ValueType,
    Candlestick: ValueType,
    Column: ValueType,
    Combo: ValueType,
    Gantt: ValueType,
    Gauge: ValueType,
    Geo: ValueType,
    Histogram: ValueType,
    Line: ValueType,
    Org: ValueType,
    Pie: ValueType,
    Sankey: ValueType,
    Scatter: ValueType,
    ScatterChart: ValueType,
    SteppedArea: ValueType,
    Table: ValueType,
    Timeline: ValueType,
    Tree: ValueType,
    WordTree: ValueType,
}
const data: Array<{ label: string, charts: ChartTypes }> = [
    {
        label: "Google",
        charts: {
            AreaChart: { exist: true, link: "/google/area-chart" },
            Bar: { exist: true, link: "/google/line-chart" },
            Bubble: { exist: true, link: "#" },
            Candlestick: { exist: true, link: "#" },
            Column: { exist: true, link: "#" },
            Combo: { exist: true, link: "#" },
            Gantt: { exist: true, link: "#" },
            Gauge: { exist: true, link: "#" },
            Geo: { exist: true, link: "#" },
            Histogram: { exist: true, link: "#" },
            Line: { exist: true, link: "#" },
            Org: { exist: true, link: "#" },
            Pie: { exist: true, link: "#" },
            Sankey: { exist: true, link: "#" },
            Scatter: { exist: true, link: "#" },
            ScatterChart: { exist: true, link: "#" },
            SteppedArea: { exist: true, link: "#" },
            Table: { exist: true, link: "#" },
            Timeline: { exist: true, link: "#" },
            Tree: { exist: true, link: "#" },
            WordTree: { exist: true, link: "#" },

        }
    }
]


export default function HomePage() {
    return <div className="max-w-lg mx-auto">
        <table className="bg-gray-200 p-10">
            <thead>
                <tr className="p-4">
                    <td></td>
                    {
                            data.map(el => <td key={el.label}>{el.label}</td>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(data[0].charts).map((key, index) => {
                        const object_key = key as ChartKeys;
                        return (
                            <tr key={index}>
                                <td>{key}</td>
                                {
                                    data.map((item, index) => {
                                        const value = item.charts[object_key];
                                        const Row = ({ children }: { children: ReactNode }) => <td key={`${index}-${item.label}`} className="p-4">{children} </td>
                                        if (value.exist === true) {
                                            return <Row><Link to={value.link} >Yes</Link></Row>
                                        } else if (value.exist === false) {
                                            return <Row>NO </Row>
                                        } else {
                                            return <Row>Don't Know </Row>
                                        }
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
}