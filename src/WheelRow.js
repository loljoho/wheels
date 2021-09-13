import React from 'react';

const WheelRow = (props) => {
  return (
    <tr className={props.className} onClick={() => props.buttonClick(props.value)}>
      <td>
        <span>{props.spec}</span>
      </td>
      <td>
        <span>{props.sidewall.toFixed(2)} {props.unit}</span>
        {/* <br/> */}
        {/* <span>{(props.sidewallDiff * 100).toFixed(2)}%</span> */}
      </td>
      <td>
        <span>{props.radius.toFixed(2)} {props.unit}</span>
        {/* <br/> */}
        {/* <span>{(props.diameterDiff * 100).toFixed(2)}%</span> */}
      </td>
      <td>
        <span>{props.diameter.toFixed(2)} {props.unit}</span>
        {/* <br/> */}
        {/* <span>{(props.radiusDiff * 100).toFixed(2)}%</span> */}
      </td>
      <td>
        <span>{props.circumf.toFixed(2)} {props.unit}</span>
        {/* <br/> */}
        {/* <span>{(props.circumfDiff * 100).toFixed(2)}%</span> */}
      </td>
      <td>
        <span>{props.revsPerMile.toFixed(2)}</span>
        {/* <br/> */}
        {/* <span>{(props.revsPerMileDiff * 100).toFixed(2)}%</span> */}
      </td>
      <td>
        <button>...</button>
      </td>
    </tr>
  );
}

export default WheelRow;
