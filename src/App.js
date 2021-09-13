import logo from './logo.png';
import './App.scss';

import WheelCalculator from './WheelCalculator';

function App() {
  return (
    <div className="App">
      <section className="hero is-success is-fullheight">
        <div className="section">
          <div className="container has-text-centered">
            <div className="column is-8-desktop is-offset-2-desktop">
              <h3 className="title has-text-black">Wheels</h3>
              <hr />
              <p className="subtitle has-text-black">by Joho</p>
              <div className="box">
                <figure className="logo">
                  <img alt="Logo" src={logo} />
                </figure>
                {/* Form */}
                <div className="table-container">
                  <WheelCalculator />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
