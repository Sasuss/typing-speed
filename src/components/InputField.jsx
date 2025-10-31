import { useState, useEffect, } from "react"
var word = "sigma";
var wordArray = word.split("");
function InputField() {
  const [inputValue, setInputValue] = useState("");
  const AllowedKeys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?Backspace";
  //const [currentWord, setCurrentWord] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  useEffect(() => {
    console.log(wordArray);
  }, []);

  useEffect(() => {
      const KeyDown = (event) => {
        //console.log(event.key);
        if (AllowedKeys.includes(event.key)) {
          if (event.key === "Backspace") {
            setInputValue(prev => prev.slice(0, -1));
            setWordIndex(prev => prev - 1);
            wordArray[wordIndex - 1] = wordArray[wordIndex - 1].props ? wordArray[wordIndex - 1].props.children : wordArray[wordIndex - 1];
          } else {
            if (event.key === wordArray[wordIndex]) { // poresit ty keys
                wordArray[wordIndex] = <span className="text-green-500" key={event.key}>{wordArray[wordIndex]}</span>;
                setWordIndex(prev => prev + 1);
            } else {
                wordArray[wordIndex] = <span className="text-red-500" key={event.key}>{wordArray[wordIndex]}</span>;
                setWordIndex(prev => prev + 1);
            }
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

  }, [wordIndex]);

  return (
    <div className="h-20 w-100 bg-white items-center flex mt-5 text-3xl pl-5">
        <span className="text-black">{wordArray}</span>
    </div>
  )
}

export default InputField
