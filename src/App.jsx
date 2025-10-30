import Timer from "./components/Timer"
import { useState, useEffect, } from "react"
import wordList from "./components/WordList";

function App() {
  const [butswitch, setButSwitch] = useState(false);
  const ButtonSwitch = () => {
    setButSwitch(!butswitch);
    console.log(butswitch);
  }
  const [inputValue, setInputValue] = useState("");
  console.log(wordList);
  console.log(wordList.length);
  const AllowedKeys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?Backspace";
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  /*
          {wordList.map((word, index) => (
            <span key={index} className="mx-1">{word}</span>
          ))}
  */
  useEffect(() => {
      const KeyDown = (event) => {
        //console.log(event.key);
        if (AllowedKeys.includes(event.key)) {
          if (event.key === "Backspace") {
            setInputValue(prev => prev.slice(0, -1))
          } else {
            setInputValue(prev => prev + event.key);
          }
        } else {
          return;
        }
        
      }
      window.addEventListener('keydown', KeyDown);
      return () => {
        window.removeEventListener('keydown', KeyDown);
      }

  }, []);

  return (
    <>
      <img src="src/assets/sahurflip.png" alt="left-decor" className="absolute left-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <img src="src/assets/sahur.png" alt="right-decor" className="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <h1 className="mb-5">BRAINROT WPM Test</h1>
        <button onClick={ButtonSwitch} className="w-30">Didi</button>
        <div className="h-20 w-100 bg-white items-center flex mt-5 text-3xl pl-5">
          <span className="text-black">{inputValue}</span>
        </div>

        {butswitch && <Timer />}
      </div>
    </>
  )
}

export default App
