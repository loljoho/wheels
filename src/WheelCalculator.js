import React, { useState } from 'react';

import WheelRow from './WheelRow';

const WheelCalculator = (props) => {
  const [sectionWidth, setSectionWidth] = useState('');
  const [sidewallAspect, setSidewallAspect] = useState('');
  const [wheelDiameter, setWheelDiameter] = useState('');
  const [rows, setRows] = useState([]);
  const [activeRow, setActiveRow] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateRow();
  }

  /**
   * Calculate new row values
   */
  const calculateRow = () => {
    let newRow = {};
    newRow.spec = `${sectionWidth}/${sidewallAspect}-${wheelDiameter}`; // Create Specification string
    newRow.sidewall = (sidewallAspect / 100 * sectionWidth / 25.4); // Calculate Sidewall Height
    newRow.diameter = parseFloat(wheelDiameter) + (2 * newRow.sidewall);  // Calculate Total Diameter
    newRow.radius = newRow.diameter / 2;  // Calculate Total Radius
    newRow.circumf = 2 * Math.PI * newRow.radius;  // Calculate Total Circumference
    newRow.revsPerMile = 63360 / newRow.circumf;  // Calculate Revolutions per Mile

    setRows(rows.concat(newRow));
  }

  /**
   * Set active row
   */
  const selectRow = (i) => {
    if (i === activeRow) {
      console.log(`Clearing active row`);
      setActiveRow(null);
    } else {
      console.log(`Setting ${i} to active row`);
      setActiveRow(i);
    }
  }

  /**
   * Render table rows
   */
  const renderTableRows = () => {
    return rows.map((row, i) => (
      <WheelRow
        key={i}
        className={i === activeRow ? `active` : ``}
        value={i}
        spec={row.spec}
        sidewall={row.sidewall}
        radius={row.radius}
        diameter={row.diameter}
        circumf={row.circumf}
        revsPerMile={row.revsPerMile}
        unit="in"
        buttonClick={selectRow.bind(this)}
      />
    ));
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
          onChange={e => setSidewallAspect(e.target.value)}
          />

        <b className="between-input">-</b>

        {/* Wheel Diameter */}
        <input
          className="input is-small"
          style={{'width': '6em'}}
          value={wheelDiameter}
          onChange={e => setWheelDiameter(e.target.value)}
          />

        {/* Add Button */}
        <input className="btn-add" type="submit" value="Add" />

      </form>

      <table className="table WheelTable">
        <thead>
          <tr>
            <th>Specification</th>
            <th>Sidewall Height</th>
            <th>Radius</th>
            <th>Diameter</th>
            <th>Circumference</th>
            <th>Revolutions/Mile</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { renderTableRows() }
        </tbody>
      </table>

    </>
  );
}

export default WheelCalculator;
