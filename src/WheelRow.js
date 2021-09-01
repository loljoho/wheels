import React from 'react';

const WheelRow = (props) => {
  return (
    <tr>
      <td>{ props.sectionWidth }/{ props.sidewallAspect }-{ props.wheelDiameter }</td>
    </tr>
  );
}

export default WheelRow;
