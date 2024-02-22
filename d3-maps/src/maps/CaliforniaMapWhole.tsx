import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function CaliforniaMapWHole() {
    const width = 800;
    const height = 400;
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if (svgRef.current) {
            const svg = d3.select(svgRef.current),
                width = +svg.attr("width"),
                height = +svg.attr("height")
            const projection = d3.geoNaturalEarth1()
                .scale(1800)
                .center([-119, 37])
                .translate([width / 2, height / 2])
            // Load external data and boot
            d3.json("/california-counties_780.geojson").then(function (data) {

                // Draw the map
                svg.append("g")
                    .selectAll("path")
                    .data(data.features)
                    .join("path")
                    .attr("fill", "#69b3a2")
                    .attr("d", d3.geoPath()
                        .projection(projection)
                    )
                    .style("stroke", "#fff")
            })
        }
    }, [])
    return <div>
        <svg ref={svgRef} height={height} width={width} />
    </div>
}