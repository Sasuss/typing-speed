import Timer from "./components/Timer"
import { useState } from "react"

function App() {
  const [butswitch, setButSwitch] = useState(false);
  const ButtonSwitch = () => {
    setButSwitch(!butswitch);
    console.log(butswitch);
  }

  const wordList = [
    "tung", "sahur", "sigma", "brainrot", "didi", "john", "pork", "hawk", "tuah",
    "niche", "khaby", "lame", "vaculik", "cago", "gyat", "skibidi", "toilet",
    "fanum", "tax", "rizz", "goon", "mog", "ohio", "npc", "grindset", "alpha",
    "beta", "gyatt", "fanumtax", "babygirl", "based", "cringe", "yap", "meow",
    "goofy", "glizzy", "mewing", "delulu", "core", "aura", "aipack", "ohiomode",
    "brokie", "fanumzone", "sigmaface", "blud", "skullemoji", "aiparrot", "npcwalk"
  ];


  return (
    <>
      <img src="src/assets/sahurflip.png" alt="left-decor" className="absolute left-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <img src="src/assets/sahur.png" alt="right-decor" className="absolute right-0 top-1/2 transform -translate-y-1/2 h-auto pointer-events-none"/>
      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <h1 className="mb-5">BRAINROT WPM Test</h1>
        <button onClick={ButtonSwitch} className="w-30">Didi</button>
        <input type="text" name="simga" id="sigma" className="bg-white text-black mt-3 w-100 h-20" disabled={!butswitch}/>
        {butswitch && <Timer />}
      </div>
    </>
  )
}

export default App
