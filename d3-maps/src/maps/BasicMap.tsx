import * as d3 from "d3";
import { useRef, useEffect } from "react";

export default function BasicMap() {
    const width = 800;
    const height = 400;
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if(svgRef.current){
            const svg = d3.select(svgRef.current),
                width = +svg.attr("width"),
                height = +svg.attr("height")
            const projection = d3.geoNaturalEarth1()
                .scale(width / 1.3 / Math.PI)
                .translate([width / 2, height / 2])
            // Load external data and boot
            d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function (data) {
    
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
    }, []);

    return <div>
        <svg ref={svgRef} id="basic-map" height={height} width={width} />
    </div>
}