import * as d3 from "d3";
import { useRef, useEffect } from "react";

const CaliforniaMap = () => {
    const height = 400;
    const width = 800;
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if (svgRef.current) {
            const svg = d3.select(svgRef.current),
                width = +svg.attr("width"),
                height = +svg.attr("height");

            // Map and projection
            const projection = d3.geoMercator()
                .center([-180, -90])                // GPS of location to zoom on
                .scale(5000)                       // This is like the zoom
                .translate([width / 2, height / 2])

            // Load external data and boot
            d3.json("/California_County_Boundaries.geojson").then(function (data:any) {
                projection.fitSize([width,height], data)
                const path = d3.geoPath().projection(projection)
                // Draw the map
                svg.append("g")
                    .selectAll("path")
                    .data(data.features)
                    .join("path")
                    .attr("fill", d => {
                        console.log(d);
                        return "gray"
                    })
                    .attr("d", path)
                    .style("stroke", "none")
            })
        }
    }, [])
    return <svg ref={svgRef} height={height} width={width} />
}

export default CaliforniaMap;