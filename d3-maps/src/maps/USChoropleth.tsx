import * as d3 from "d3";
import { Legend } from "d3-color-legend";
import { useRef, useEffect } from "react";
import * as topojson from "topojson-client";

const USChoroplethMap = () => {
    const height = 800;
    const width = 400;
    const svgRef = useRef<SVGSVGElement>(null);
    useEffect(() => {
        if (svgRef.current) {
            const color = d3.scaleQuantize([1, 10], d3.schemeBlues[9]);
            const path = d3.geoPath();
            const format = d => `${d}%`;

            Promise.all([
                d3.json("/counties-albers-10m.json"),
                d3.csv("/unemployment-x.csv")
            ])
                .then(function (loadData) {
                    const us = loadData[0];
                    const data = loadData[1];
                    // The counties feature collection is all U.S. counties, each with a
                    const valuemap = new Map(data.map(d => [d.id, d.rate]));
                    // five-digit FIPS identifier. The statemap lets us lookup the name of 
                    // the state that contains a given county; a state’s two-digit identifier
                    // corresponds to the first two digits of its counties’ identifiers.
                    const counties = topojson.feature(us, us.objects.counties);
                    const states = topojson.feature(us, us.objects.states);
                    const statemap = new Map(states.features.map(d => [d.id, d]));

                    // The statemesh is just the internal borders between states, i.e.,
                    // everything but the coastlines and country borders. This avoids an
                    // additional stroke on the perimeter of the map, which would otherwise
                    // mask intricate features such as islands and inlets. (Try removing
                    // the last argument to topojson.mesh below to see the effect.)
                    const statemesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

                    const svg = d3.select(svgRef.current)
                        .attr("viewBox", [0, 0, 975, 610])
                        .attr("style", "max-width: 100%; height: auto;");

                    svg.append("g")
                        .attr("transform", "translate(610,20)")
                    // .append(() => Legend(color, {title: "Unemployment rate (%)", width: 260}));

                    svg.append("g")
                        .selectAll("path")
                        .data(topojson.feature(us, us.objects.counties).features)
                        .join("path")
                        .attr("fill", d => color(valuemap.get(d.id)))
                        .attr("d", path)
                        .append("title")
                        .text(d => `${d.properties.name}, ${statemap.get(d.id.slice(0, 2)).properties.name}\n${valuemap.get(d.id)}%`);

                    svg.append("path")
                        .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
                        .attr("fill", "none")
                        .attr("stroke", "white")
                        .attr("stroke-linejoin", "round")
                        .attr("d", path);
                })

        }
    }, [])
    return <svg ref={svgRef} height={height} width={width} />
}

export default USChoroplethMap;