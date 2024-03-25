function ResistanceChart({ randomNumber, pointerPosition }) {
  return (
    <section>
      <header>
        <p>Support & Resistance</p>
        <span className="material-symbols-outlined">info</span>
      </header>
      <div className="graph graph-two">
        <img src="/bar2.svg" alt="" />
        <img
          className="pointerTwo"
          src="/pointer2.svg"
          alt=""
          style={{ right: pointerPosition + "px" }}
        />
        <div className="resistance">
          <div className="resistance-content">
            <p>S3</p>
            <p>S2</p>
            <p>S1</p>
          </div>
          <div className="resistance-content">
            <p>R1</p>
            <p>R2</p>
            <p>R3</p>
          </div>
        </div>
      </div>
      <div className="calculation calculationTwo">
        <div>
          <p>{(12108.15 + randomNumber).toFixed(2)}</p>
          <p className="code">S1</p>
        </div>
        <div>
          <p>{(32115.62 + randomNumber).toFixed(2)}</p>
          <p className="code">S2</p>
        </div>
        <div>
          <p>{(40112.38 + randomNumber).toFixed(2)}</p>
          <p className="code">S3</p>
        </div>
        <div>
          <p>{(47853.79 + randomNumber).toFixed(2)}</p>
          <p className="code">R1</p>
        </div>
        <div>
          <p>{(44455.74 + randomNumber).toFixed(2)}</p>
          <p className="code">R2</p>
        </div>
        <div>
          <p>{(12397.47 + randomNumber).toFixed(2)}</p>
          <p className="code">R3</p>
        </div>
      </div>
    </section>
  );
}

export default ResistanceChart;
