import React, { useState } from 'react';

import WheelRow from './WheelRow';

const WheelCalculator = (props) => {
  const [sectionWidth, setSectionWidth] = useState('');
  const [sidewallAspect, setsidewallAspect] = useState('');
  const [wheelDiameter, setwheelDiameter] = useState('');
  const [rows, setRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let sidewallHeight = (sidewallAspect / 100 * sectionWidth / 25.4); // Calculate Sidewall Height
    let totalDiameter = parseFloat(wheelDiameter) + (2 * sidewallHeight);  // Calculate Total Diameter
    let totalRadius = totalDiameter / 2;  // Calculate Total Radius
    let circumference = 2 * Math.PI * totalRadius;  // Calculate Total Circumference
    let revsPerMile = 63360 / circumference;  // Calculate Revolutions per Mile

    setRows(rows.concat({
      sectionWidth: sectionWidth,
      sidewallAspect: sidewallAspect,
      wheelDiameter: wheelDiameter,
      sidewallHeight: sidewallHeight,
      totalRadius: totalRadius,
      totalDiameter: totalDiameter,
      circumference: circumference,
      revsPerMile: revsPerMile
    }));
  }

  return (
    <>
      <form
        className="WheelForm has-text-centered"
        onSubmit={handleSubmit}
      >
        {/* Cross Section Width */}
        <input
          className="input is-small"
          style={{'width': '8em'}}
          value={sectionWidth}
          onChange={e => setSectionWidth(e.target.value)}
          autoFocus />

        <b className="between-input">/</b>

        {/* Sidewall Aspect Ratio */}
        <input
          className="input is-small"
          style={{'width': '6em'}}
          value={sidewallAspect}
          onChange={e => setsidewallAspect(e.target.value)}
          />

        <b className="between-input">-</b>

        {/* Wheel Diameter */}
        <input
          className="input is-small"
          style={{'width': '6em'}}
          value={wheelDiameter}
          onChange={e => setwheelDiameter(e.target.value)}
          />

        {/* Add Button */}
        <input className="btn-add" type="submit" value="Add" />

      </form>

      <table className="table WheelTable">
        <thead>
          <tr>
            <th>Specification</th>
            <th>Sidewall Height</th>
            <th>Total Radius</th>
            <th>Total Diameter</th>
            <th>Total Circumference</th>
            <th>Revolutions per Mile</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <WheelRow
              key={i}
              sectionWidth={row.sectionWidth}
              sidewallAspect={row.sidewallAspect}
              wheelDiameter={row.wheelDiameter}
              sidewallHeight={row.sidewallHeight}
              radius={row.totalRadius}
              diameter={row.totalDiameter}
              circumference={row.circumference}
              revsPerMile={row.revsPerMile}
              unit="in"
            />
          ))}
        </tbody>
      </table>

    </>
  );
}

export default WheelCalculator;
