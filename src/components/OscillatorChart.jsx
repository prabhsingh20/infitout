import { useState } from "react";

function OscillatorChart({ randomNumber, singleDigit, pointerPosition }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <section>
      <header>
        <p>Oscillators</p>
        <span className="material-symbols-outlined">info</span>
      </header>
      <div className="graph graph-three">
        <img src="/bar4.svg" alt="" />
        <img
          className="pointer"
          src="/pointer.svg"
          alt=""
          style={{ left: pointerPosition * 0.7 + "px" }}
        />
        <div className="label">
          <div className="label-content">
            <p>{Math.trunc(1 + singleDigit)}</p>
            <p className="describe os-one ">Bearish</p>
          </div>
          <div className="label-content">
            <p>{Math.trunc(9 + singleDigit)}</p>
            <p className="describe os-two"> Neutral</p>
          </div>
          <div className="label-content">
            <p>{Math.trunc(0 + singleDigit)}</p>
            <p className="describe os-three">Bullish</p>
          </div>
        </div>
      </div>
      <div className="calculation calculationThree">
        <div className="calculation-content">
          <p>
            <span>N</span>RSI (14)
          </p>
          <p>{(51.48 + randomNumber).toFixed(2)}</p>
        </div>
        <div className="calculation-content">
          <p>
            <span>N</span>Stoch.%K (14, 3, 3)
          </p>
          <p>{(47.35 + randomNumber).toFixed(2)}</p>
        </div>
        {showDetails && (
          <>
            <div className="calculation-content">
              <p>
                <span>N</span>CCI (20)
              </p>
              <p>{(-41.48 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>N</span>
                ADX (14)
              </p>
              <p>{(37.35 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>N</span>
                Awesome Osc.
              </p>
              <p>{(-77.35 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>N</span>
                Momentum (10)
              </p>
              <p>{(67.35 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>N</span>
                Macd (12, 26, 9)
              </p>
              <p>{(67.35 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>N</span>
                Stoch. RSI Fast (3, 3, 14, 14)
              </p>
              <p>{(67.35 + randomNumber).toFixed(2)}</p>
            </div>
          </>
        )}
        <div className="btn-container">
          <button onClick={toggleDetails}>
            {showDetails ? "View Less" : "View Details "}
          </button>
          {showDetails ? (
            <span className="material-symbols-outlined">expand_less</span>
          ) : (
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default OscillatorChart;
