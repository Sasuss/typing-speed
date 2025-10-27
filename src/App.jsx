import Timer from "./components/Timer"
import { useState } from "react"
import wordList from "./components/WordList";

function App() {
  const [butswitch, setButSwitch] = useState(false);
  const ButtonSwitch = () => {
    setButSwitch(!butswitch);
    console.log(butswitch);
  }
  /*
          {wordList.map((word, index) => (
            <span key={index} className="mx-1">{word}</span>
          ))}
  */
  console.log(wordList);

  return (
    <>
      <img src="src/assets/sahurflip.png" alt="left-decor" className="absolute left-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <img src="src/assets/sahur.png" alt="right-decor" className="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <h1 className="mb-5">BRAINROT WPM Test</h1>
        <button onClick={ButtonSwitch} className="w-30">Didi</button>
        <input type="text" placeholder="didi" name="inputField" id="inputField" className="bg-white text-black mt-3 w-100 h-20 text-2xl p-5" disabled={!butswitch}/>
        {butswitch && <Timer />}
      </div>
    </>
  )
}

export default App
