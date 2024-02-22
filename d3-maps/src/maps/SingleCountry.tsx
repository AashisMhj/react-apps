import * as d3 from "d3";
import { useRef, useEffect } from "react";

const SingleCountry = () => {
    const height = 800;
    const width = 400;
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if (svgRef.current) {
            const svg = d3.select(svgRef.current),
                width = +svg.attr("width"),
                height = +svg.attr("height");

            // Map and projection
            const projection = d3.geoMercator()
                .center([2, 47])                // GPS of location to zoom on
                .scale(980)                       // This is like the zoom
                .translate([480, 250])

            // Load external data and boot
            d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function (data:any) {

                // Filter data
                data.features = data.features.filter(d => { 
                    //console.log(d.properties.name); 
                    return d.properties.name == "France" 
                })

                // Draw the map
                svg.append("g")
                    .selectAll("path")
                    .data(data.features)
                    .join("path")
                    .attr("fill", "grey")
                    .attr("d", d3.geoPath()
                        .projection(projection)
                    )
                    .style("stroke", "none")
            })
        }
    }, [])
    return <svg ref={svgRef} height={height} width={width} />
}

export default SingleCountry;