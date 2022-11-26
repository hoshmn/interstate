// import { Slider } from "@mui/material";
import { range } from "lodash";
import React from "react";
// import { Slider } from "@mui/material";
export default function ControlString({
  year,
  metric,
  weighted,
  selectedState,
  selectYear,
  selectMetric,
  setWeighted
}) {
  // const [selectedState, setSelecetedState] = React.useState("CA");
  // console.log(selectedState);
  const metricSelect = (
    <select value={metric} onChange={(e) => selectMetric(e.target.value)}>
      <option value="from">to</option>
      <option value="to">from</option>
      <option value="between">net to</option>
    </select>
  );

  const yearSelect = (
    <div style={{ position: 'relative', display: 'inline-block', fontFamily: 'monospace', margin: "0 15px" }}>
      20{year}
    {/* <select value={year} onChange={(e) => selectYear(e.target.value)}>
      {range(5, 20)
        .map((n) => String(n).padStart(2, 0))
        .map((y) => (
          <option key={y} value={y}>
            20{y}
          </option>
        ))}
    </select> */}
    <input onChange={(e) => selectYear(e.target.value.padStart(2, 0))} 
    style={{ position: 'absolute', top: 16, left: "-50%", width: "200%" }} type="range" min="05" max="19" value={year} />
    </div>
  );
      {/* <Slider
  aria-label="Temperature"
  defaultValue={2000+year}
  // getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  marks
  min={2005}
  max={2019}
/> */}

  const weightedSet = (
    <>
      <input
        checked={weighted}
        type="checkbox"
        id="weighted"
        name="weighted"
        value="weighted"
        style={{marginLeft: 14}}
        onChange={() => setWeighted(!weighted)}
      />
      <label for="weighted">weighted</label>
      {/* <caption>(per 100,000)</caption> */}
    </>
  );

  return (
    <div style={{ marginTop: 24 }}>
      How many people moved {metricSelect} {selectedState}{" "}
      {/* {metric === "between" ? "net" : metric} */}
      in {yearSelect}
      {weightedSet}
      {/* <Slider /> */}
{/* <Slider defaultValue={30} step={10} marks min={10} max={110} disabled /> */}
    </div>
  );
}
