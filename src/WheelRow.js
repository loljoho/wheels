import React from 'react';

const WheelRow = (props) => {
  return (
    <tr className={props.className} onClick={() => props.buttonClick(props.value)}>
      <td>
        <span>{props.sectionWidth}/{props.sidewallAspect}-{props.wheelDiameter}</span>
      </td>
      <td>
        <span>{props.sidewallHeight.toFixed(2)} {props.unit}</span>
      </td>
      <td>
        <span>{props.radius.toFixed(2)} {props.unit}</span>
      </td>
      <td>
        <span>{props.diameter.toFixed(2)} {props.unit}</span>
      </td>
      <td>
        <span>{props.circumference.toFixed(2)} {props.unit}</span>
      </td>
      <td>
        <span>{props.revsPerMile.toFixed(2)}</span>
      </td>
    </tr>
  );
}

export default WheelRow;
