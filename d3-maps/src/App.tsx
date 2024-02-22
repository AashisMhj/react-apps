import BasicMap from "./maps/BasicMap"
import BubbleMap from "./maps/BubbleMap"
import CalaforniaMap from "./maps/CaliforniaMapWhole"
import ChoroplethMap from "./maps/ChoroplethMap"
import SingleCountry from "./maps/SingleCountry"
import USChoroplethMap from "./maps/USChoropleth"
import "./assets/global.css";
import CaliforniaMap from "./maps/CaliforniaMap"
import USAMap from "./maps/USAMap"

function App() {

  return (
    <div>
      <div className="flex items-center justify-center flex-col pb-10">
        <h2>Calafornia Map</h2>
        <CalaforniaMap />
        {/* <h2>Basic Map</h2>
        <BasicMap /> */}
        <h2>Choropleth Map</h2>
        <ChoroplethMap />
        {/*
        <h2>Single Map</h2>
        <SingleCountry />
        <h2>Bubble Map with Tooltip</h2>
        <BubbleMap />
        <h2>US Choropleth Map</h2>
        <USChoroplethMap />
        <h2>California Map</h2>
        <CaliforniaMap />
        <h2>USA Whole Map</h2>
        <USAMap /> */}
      </div>
    </div>
  )
}

export default App
