import * as d3 from "d3";
import { useRef, useEffect } from "react";

const USAMap = ()=>{
    const svgRef = useRef<SVGSVGElement>(null);
    const height = 600;
    const width = 800;
    useEffect(()=>{
        if(svgRef.current){
            const svg = d3.select(svgRef.current),
                width = +svg.attr('width'),
                height = +svg.attr('height')

            const projection = d3.geoMercator()

            d3.json('/united-states-detailed-boundary_1062.geojson')
                .then((data:any) =>{
                    const path = d3.geoPath().projection(projection);
                    projection.fitSize([width,height],data); // adjust the projection to the features
                    svg.append("path").attr("d", path(data));
                })
                .catch(console.trace)
        }
    }, [])
    return <svg ref={svgRef} height={height} width={width} />
}

export default USAMap;