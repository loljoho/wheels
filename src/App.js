import logo from './logo.png';
import './App.scss';

import WheelForm from './WheelForm';

function App() {
  return (
    <div className="App">
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4-desktop is-offset-4-desktop is">
              <h3 className="title has-text-black">Wheels</h3>
              <hr className="login-hr" />
              <p className="subtitle has-text-black">by Jonathan Ho</p>
              <div className="box">
                <figure className="logo">
                  <img alt="Logo" src={logo} />
                </figure>
                {/* Form */}
                <WheelForm />
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
