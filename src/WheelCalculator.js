import React, { useState } from 'react';

import WheelTable from './WheelTable';

const WheelCalculator = (props) => {
  const [sectionWidth, setSectionWidth] = useState('');
  const [sidewallAspect, setsidewallAspect] = useState('');
  const [wheelDiameter, setwheelDiameter] = useState('');

  return (
    <>
      <form className="WheelForm has-text-centered">
        {/* Cross Section Width */}
        <input
          className="input is-small"
          style={{'width': '8em'}}
          // type="number"
          value={sectionWidth}
          onChange={e => setSectionWidth(e.target.value)}
          autoFocus />

        <b className="between-input">/</b>

        {/* Sidewall Aspect Ratio */}
        <input
          className="input is-small"
          style={{'width': '6em'}}
          // type="number"
          value={sidewallAspect}
          onChange={e => setsidewallAspect(e.target.value)}
          />

        <b className="between-input">-</b>

        {/* Wheel Diameter */}
        <input
          className="input is-small"
          style={{'width': '6em'}}
          // type="number"
          value={wheelDiameter}
          onChange={e => setwheelDiameter(e.target.value)}
          />

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
