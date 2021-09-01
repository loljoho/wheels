import React from 'react';

import WheelRow from './WheelRow';

const WheelTable = (props) => {

  return (
    <table className="table WheelTable">
      <thead>
        <tr>
          <th>Specification</th>
          {/* <th>Sidewall Height</th>
          <th>Total Radius</th>
          <th>Total Diameter</th>
          <th>Total Circumference</th>
          <th>Revolutions per Mile</th> */}
        </tr>
      </thead>
      <tbody>
        <WheelRow { ...props} />
      </tbody>
    </table>
  );
}

export default WheelTable;
