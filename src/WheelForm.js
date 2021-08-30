import React from 'react';

class WheelForm extends React.Component {
  render() {
    return (
      <form className="WheelForm has-text-centered">
        <input className="input is-small" style={{'width': '6em'}} type="number" autoFocus />
        <b className="between-input">/</b>
        <input className="input is-small" style={{'width': '3em'}} type="number"/>
        <b className="between-input">R</b>
        <input className="input is-small" style={{'width': '3em'}} type="number"/>
      </form>
    );
  }
}

export default WheelForm;
