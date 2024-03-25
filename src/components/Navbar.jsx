function Navbar({ onHandleEvents, buttonText }) {
  return (
    <nav className="navBar">
      <div>
        <button
          className={`btn ${buttonText === "5 Minutes" ? "active" : ""}`}
          onClick={() => onHandleEvents("5 Minutes")}
        >
          {buttonText === "5 Minutes" ? "5 Minutes" : "5min"}
        </button>
        <button
          className={`btn ${buttonText === "10 Minutes" ? "active" : ""}`}
          onClick={() => onHandleEvents("10 Minutes")}
        >
          {buttonText === "10 Minutes" ? "10 Minutes" : "10min"}
        </button>
        <button
          className={`btn ${buttonText === "15 Minutes" ? "active" : ""}`}
          onClick={() => onHandleEvents("15 Minutes")}
        >
          {buttonText === "15 Minutes" ? "15 Minutes" : "15min"}
        </button>
        <button
          className={`btn ${buttonText === "30 Minutes" ? "active" : ""}`}
          onClick={() => onHandleEvents("30 Minutes")}
        >
          {buttonText === "30 Minutes" ? "30 Minutes" : "30min"}
        </button>
        <button
          className={`btn ${buttonText === "1 Hour" ? "active" : ""}`}
          onClick={() => onHandleEvents("1 Hour")}
        >
          {buttonText === "1 Hour" ? "1 Hour" : "1hr"}
        </button>
        <button
          className={`btn ${buttonText === "1 Day" ? "active" : ""}`}
          onClick={() => onHandleEvents("1 Day")}
        >
          {buttonText === "1 Day" ? "1 Day" : "1day"}
        </button>
      </div>
    </nav>
  );

  // return (
  //   <div className="navBar">
  //     <nav>
  //       <button className="btn" onClick={onHandleEvents}>
  //         5min
  //       </button>
  //       <button className="btn" onClick={onHandleEvents}>
  //         10min
  //       </button>
  //       <button className="btn" onClick={onHandleEvents}>
  //         15min
  //       </button>
  //       <button className="btn" onClick={onHandleEvents}>
  //         30min
  //       </button>
  //       <button className="btn" onClick={onHandleEvents}>
  //         1hr
  //       </button>
  //       <button className="btn" onClick={onHandleEvents}>
  //         1day
  //       </button>
  //     </nav>
  //   </div>
  // );
}

export default Navbar;
