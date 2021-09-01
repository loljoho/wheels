import React from 'react';

const WheelRow = (props) => {
  return (
    <tr>
      <td>{ props.sectionWidth }/{ props.sidewallAspect }-{ props.wheelDiameter }</td>
      <td>{ props.sidewallHeight.toFixed(2) } { props.unit }</td>
      <td>{ props.radius.toFixed(2) } { props.unit }</td>
      <td>{ props.diameter.toFixed(2) } { props.unit }</td>
      <td>{ props.circumference.toFixed(2) } { props.unit }</td>
      <td>{ props.revsPerMile.toFixed(2) }</td>
    </tr>
  );
}

export default WheelRow;
