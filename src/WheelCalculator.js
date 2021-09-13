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
    createNewRow();
  }

  /**
   * Calculate and add new row values
   */
  const createNewRow = () => {
    let newRow = {
      sectionWidth: sectionWidth,
      sidewallAspect: sidewallAspect,
      wheelDiameter: wheelDiameter
    };
    newRow.sidewallHeight = (sidewallAspect / 100 * sectionWidth / 25.4); // Calculate Sidewall Height
    newRow.totalDiameter = parseFloat(wheelDiameter) + (2 * newRow.sidewallHeight);  // Calculate Total Diameter
    newRow.totalRadius = newRow.totalDiameter / 2;  // Calculate Total Radius
    newRow.circumference = 2 * Math.PI * newRow.totalRadius;  // Calculate Total Circumference
    newRow.revsPerMile = 63360 / newRow.circumference;  // Calculate Revolutions per Mile

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
        sectionWidth={row.sectionWidth}
        sidewallAspect={row.sidewallAspect}
        wheelDiameter={row.wheelDiameter}
        sidewallHeight={row.sidewallHeight}
        radius={row.totalRadius}
        diameter={row.totalDiameter}
        circumference={row.circumference}
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
            <th>Total Radius</th>
            <th>Total Diameter</th>
            <th>Total Circumference</th>
            <th>Revolutions per Mile</th>
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
