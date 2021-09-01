import React, { useState } from 'react';

import WheelTable from './WheelTable';

const WheelCalculator = (props) => {
  const [sectionWidth, setSectionWidth] = useState('');
  const [sidewallAspect, setsidewallAspect] = useState('');
  const [wheelDiameter, setwheelDiameter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate Sidewall Height
    let sdwHeight = (sidewallAspect / 100 * sectionWidth / 25.4);
    console.log(`sdwHeight: ${sdwHeight}`);

    // Calculate Total Diameter
    let totalDiam = parseFloat(wheelDiameter) + (2 * sdwHeight);
    console.log(`totalDiam: ${totalDiam}`);

    // Calculate Total Radius
    let totalRadi = totalDiam / 2;
    console.log(`totalRadi: ${totalRadi}`);

    // Calculate Total Circumference
    let totalCirc = 2 * Math.PI * totalRadi;
    console.log(`totalCirc: ${totalCirc}`);

    // Calculate Revolutions per Mile
    let revsPerMi = 63360 / totalCirc;
    console.log(`revsPerMi: ${revsPerMi}`);

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

        {/* Add Specs */}
        <input type="submit" value="Add" />

      </form>

      <WheelTable
        sectionWidth={sectionWidth}
        sidewallAspect={sidewallAspect}
        wheelDiameter={wheelDiameter}
      />

    </>
  );
}

export default WheelCalculator;
