import { useState } from "react";

function AverageChart({ randomNumber, singleDigit, pointerPosition }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <section>
      <header>
        <p>Moving averages</p>
      </header>
      <div className="graph graph-three">
        <img src="/bar3.svg" alt="" />
        <img
          className="pointer"
          src="/pointer.svg"
          alt=""
          style={{ left: pointerPosition * 0.9 + "px" }}
        />
        <div className="label">
          <div className="label-content">
            <p>{Math.trunc(2 + singleDigit)}</p>
            <p className="describe mv-one ">Bearish</p>
          </div>
          <div className="label-content">
            <p>{Math.trunc(1 + singleDigit)}</p>
            <p className="describe mv-two"> Neutral</p>
          </div>
          <div className="label-content">
            <p>{Math.trunc(14 + singleDigit)}</p>
            <p className="describe mv-three">Bullish</p>
          </div>
        </div>
      </div>
      <div className="calculation calculationThree">
        <div className="calculation-content">
          <p>
            <span>B</span>EMA (5)
          </p>
          <p>{(22108.15 + randomNumber).toFixed(2)}</p>
        </div>
        <div className="calculation-content">
          <p>
            <span>B</span>SMA (5)
          </p>
          <p>{(22115.62 + randomNumber).toFixed(2)}</p>
        </div>
        {showDetails && (
          <>
            <div className="calculation-content">
              <p>
                <span>B</span>EMA (10)
              </p>
              <p>{(22058.15 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>B</span>SMA (10)
              </p>
              <p>{(22005.62 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>B</span>EMA (20)
              </p>
              <p>{(22078.15 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>S</span>SMA (20)
              </p>
              <p>{(29005.62 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>B</span>EMA (30)
              </p>
              <p>{(24478.15 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>S</span>SMA (30)
              </p>
              <p>{(23305.62 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>B</span>EMA (50)
              </p>
              <p>{(21078.15 + randomNumber).toFixed(2)}</p>
            </div>
            <div className="calculation-content">
              <p>
                <span>S</span>SMA (50)
              </p>
              <p>{(23005.62 + randomNumber).toFixed(2)}</p>
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

export default AverageChart;
