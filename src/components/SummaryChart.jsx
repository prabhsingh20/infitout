/* eslint-disable react/prop-types */
function SummaryChart({ randomNumber, singleDigit, pointerPosition }) {
  return (
    <section>
      <header>
        <p>Summary</p>
        <span className="material-symbols-outlined">info</span>
      </header>
      <div className="graph" id="graph">
        <img src="/bar.svg" alt="" />
        <img
          className="pointer"
          src="/pointer.svg"
          alt=""
          style={{ left: pointerPosition + "px" }}
        />
        <div className="label">
          <div className="label-content">
            <p>{Math.trunc(14 + singleDigit)}</p>
            <p className="describe describe-one">Bearish</p>
          </div>
          <div className="label-content">
            <p>{Math.trunc(8 + singleDigit)}</p>
            <p className="describe describe-two"> Neutral</p>
          </div>
          <div className="label-content">
            <p>{Math.trunc(5 + singleDigit)}</p>
            <p className="describe describe-three">Bullish</p>
          </div>
        </div>
      </div>
      <div className="calculation">
        <div>
          <p>{(22108.15 + randomNumber).toFixed(2)} </p>
          <p className="code">EMA (20)</p>
        </div>
        <div>
          <p>{(22115.62 + randomNumber).toFixed(2)}</p>
          <p className="code">SMA(20)</p>
        </div>
        <div>
          <p>{(40.38 + randomNumber).toFixed(2)}</p>
          <p className="code">RSI(14)</p>
        </div>
        <div>
          <p>{(-18.79 + randomNumber).toFixed(2)}</p>
          <p className="code">Awesome Osc.</p>
        </div>
        <div>
          <p>{(-1.74 + randomNumber).toFixed(2)}</p>
          <p className="code">Macd (12, 26, 9)</p>
        </div>
        <div>
          <p>{(-97.47 + randomNumber).toFixed(2)}</p>
          <p className="code">CCI (20)</p>
        </div>
      </div>
    </section>
  );
}

export default SummaryChart;
