import SummaryChart from "./SummaryChart";
import ResistanceChart from "./ResistanceChart";
import AverageChart from "./AverageChart";
import OscillatorChart from "./OscillatorChart";
import Navbar from "./Navbar";
import { useState } from "react";

function Main() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [singleDigit, setSingleDigit] = useState(null);
  const [pointerPosition, setPointerPosition] = useState(152);
  const [buttonText, setButtonText] = useState("5min");

  const graphWidth = 30 * 10;
  const gridIntervals = 15;

  function handlePointer() {
    const intervalWidth = graphWidth / gridIntervals;
    const randomInterval = Math.floor(Math.random() * gridIntervals);
    const randomLeft = randomInterval * intervalWidth;
    setPointerPosition(randomLeft);
  }

  function handleText(text) {
    setButtonText(text);
  }

  function handleRandomNumber() {
    const min = 100;
    const max = 400;
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(newRandomNumber);
  }

  function handleSingleDigit() {
    const min = 2;
    const max = 6;
    const newRandomNumber = (Math.random() * (max - min) + min).toFixed(2);
    setSingleDigit(parseFloat(newRandomNumber));
  }

  function handleEvents(text) {
    handleSingleDigit();
    handleRandomNumber();
    handlePointer();
    handleText(text);
  }

  return (
    <>
      <Navbar onHandleEvents={handleEvents} buttonText={buttonText} />
      <main>
        <SummaryChart
          randomNumber={randomNumber}
          singleDigit={singleDigit}
          pointerPosition={pointerPosition}
        />
        <ResistanceChart
          randomNumber={randomNumber}
          singleDigit={singleDigit}
          pointerPosition={pointerPosition}
        />
        <AverageChart
          randomNumber={randomNumber}
          singleDigit={singleDigit}
          pointerPosition={pointerPosition}
        />
        <OscillatorChart
          randomNumber={randomNumber}
          singleDigit={singleDigit}
          pointerPosition={pointerPosition}
        />
      </main>
    </>
  );
}

export default Main;
