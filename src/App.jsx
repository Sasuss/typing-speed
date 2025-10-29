import Timer from "./components/Timer"
import { useState, useEffect, useRef, } from "react"
//import wordList from "./components/WordList";

function App() {
  const [butswitch, setButSwitch] = useState(false);
  const ButtonSwitch = () => {
    setButSwitch(!butswitch);
    console.log(butswitch);
  }
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);


  var word = "test";
  useEffect(() => {
    if (butswitch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [butswitch]);
  
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  /*
          {wordList.map((word, index) => (
            <span key={index} className="mx-1">{word}</span>
          ))}
  */
  //console.log(wordList);
  useEffect(() => {
      addEventListener("keydown", (event) => {
        console.log(event.key);
      });

  }, []);

  return (
    <>
      <img src="src/assets/sahurflip.png" alt="left-decor" className="absolute left-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <img src="src/assets/sahur.png" alt="right-decor" className="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <h1 className="mb-5">BRAINROT WPM Test</h1>
        <button onClick={ButtonSwitch} className="w-30">Didi</button>
        <div className="h-20 w-100 bg-white items-center flex mt-5 text-3xl pl-5">
          <span className="text-black">{word}</span>
        </div>
        
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="didi" name="inputField" id="inputField" className="bg-white text-black mt-3 w-100 h-20 text-2xl p-5" disabled={!butswitch} ref={inputRef}/>
        {butswitch && <Timer />}
      </div>
    </>
  )
}

export default App
