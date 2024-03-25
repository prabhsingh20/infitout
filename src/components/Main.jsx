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
  const [pointerPositionTwo, setPointerPositionTwo] = useState(102);
  const [buttonText, setButtonText] = useState("5min");

  const graphWidth = 30 * 10;
  const pointerWidth = 2;
  const gridIntervals = 15;

  function handlePointer() {
    const intervalWidth = graphWidth / gridIntervals;
    const maxPointerLeft = graphWidth - pointerWidth;
    const maxPointerRight = graphWidth;

    const randomInterval = Math.floor(Math.random() * gridIntervals);
    const randomPosition = randomInterval * intervalWidth;

    const maxPosition = Math.min(
      maxPointerRight,
      Math.max(0, randomPosition - pointerWidth / 2)
    );

    setPointerPosition(maxPosition);
  }
  function handlePointerTwo() {
    const intervalWidth = graphWidth / gridIntervals;
    const maxPointerLeft = graphWidth - pointerWidth;
    const maxPointerRight = graphWidth;

    const randomInterval = Math.floor(Math.random() * gridIntervals);
    const randomPosition = randomInterval * intervalWidth;

    const maxPosition = Math.min(
      maxPointerRight,
      Math.max(0, randomPosition - pointerWidth / 2)
    );

    setPointerPositionTwo(maxPosition);
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
    handlePointerTwo();
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
          pointerPositionTwo={pointerPositionTwo}
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
