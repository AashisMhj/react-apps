import * as d3 from "d3";
import { useRef, useEffect } from "react";

const BubbleMap = () => {
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
                .center([4, 47])                // GPS of location to zoom on
                .scale(1020)                       // This is like the zoom
                .translate([width / 2, height / 2])

            // Create data for circles:
            const markers = [
                { long: 9.083, lat: 42.149, name: "Corsica" }, // corsica
                { long: 7.26, lat: 43.71, name: "Nice" }, // nice
                { long: 2.349, lat: 48.864, name: "Paris" }, // Paris
                { long: -1.397, lat: 43.664, name: "Hossegor" }, // Hossegor
                { long: 3.075, lat: 50.640, name: "Lille" }, // Lille
                { long: -3.83, lat: 58, name: "Morlaix" }, // Morlaix
            ];

            // Load external data and boot
            d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function (data) {

                // Filter data
                data.features = data.features.filter(d => d.properties.name == "France")

                // Draw the map
                svg.append("g")
                    .selectAll("path")
                    .data(data.features)
                    .join("path")
                    .attr("fill", "#b8b8b8")
                    .attr("d", d3.geoPath()
                        .projection(projection)
                    )
                    .style("stroke", "black")
                    .style("opacity", .3)

                // create a tooltip
                const Tooltip = d3.select(svgRef.current)
                    .append("div")
                    .attr("class", "tooltip")
                    .style("opacity", 1)
                    .style("background-color", "black")
                    .style("border", "solid")
                    .style("border-width", "2px")
                    .style("border-radius", "5px")
                    .style("padding", "5px")
                    .html("<div>this</div>")

                // Three function that change the tooltip when user hover / move / leave a cell
                const mouseover = function (event, d) {
                    Tooltip.style("opacity", 1)
                }
                const mousemove = function (event, d) {
                    console.log(d.name + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat);
                    Tooltip
                    .html("<div>This</div>")
                        // .html(d.name + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat)
                        .style("left", (event.x) / 2 + "px")
                        .style("top", (event.y) / 2 - 30 + "px")
                }
                const mouseleave = function (event, d) {
                    // Tooltip.style("opacity", 0)
                }

                // Add circles:
                svg
                    .selectAll("myCircles")
                    .data(markers)
                    .join("circle")
                    .attr("cx", d => projection([d.long, d.lat])[0])
                    .attr("cy", d => projection([d.long, d.lat])[1])
                    .attr("r", 14)
                    .attr("class", "circle")
                    .style("fill", "69b3a2")
                    .attr("stroke", "#69b3a2")
                    .attr("stroke-width", 3)
                    .attr("fill-opacity", .4)
                    .on("mouseover", mouseover)
                    .on("mousemove", mousemove)
                    .on("mouseleave", mouseleave)

            })
        }
    }, [])
    return <svg ref={svgRef} height={height} width={width} />
}

export default BubbleMap;