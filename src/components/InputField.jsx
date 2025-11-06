import { useState, useEffect } from "react";
import wordList from "./WordList";

function InputField() {
  const [inputValue, setInputValue] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordCounter, setWordCounter] = useState(0);
  const [wrongChars, setWrongChars] = useState(0);
  const wordArray = wordList[wordCounter].split(" ");
  const AllowedKeys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
  const [currentWord, setCurrentWord] = useState(wordList[0]);
  const wordLength = currentWord.length;

  useEffect(() => {

    if (wordIndex === wordLength && wrongChars === 0) {
      setWordCounter((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex < wordList.length) {
          setCurrentWord(wordList[nextIndex]); 
        }
        return nextIndex;
      });
      setWordIndex(0);
      setInputValue([]);
    }
  }, [wordIndex, wordLength, wrongChars]);

  useEffect(() => {
    const KeyDown = (event) => {
      if (!AllowedKeys.includes(event.key) && event.key !== "Backspace") return;

      if (event.key === "Backspace") {
        setWordIndex((prev) => (prev > 0 ? prev - 1 : 0));
        setInputValue((prev) => prev.slice(0, -1));

        setWrongChars((prev) => (prev > 0 ? prev - 1 : 0));
        
        return;
      }

      const currentChar = currentWord[wordIndex];
      const typedChar = event.key;
      const isCorrect = typedChar === currentChar;
      
      if (!isCorrect) {
        setWrongChars((prev) => prev + 1);
      }
      console.log("Current Char:", currentChar, "Typed Char:", typedChar, "Is Correct:", isCorrect);
      console.log("Wrong Chars:", wrongChars);
      const newSpan = (
        <span
          key={wordIndex}
          className={isCorrect ? "text-green-500" : "text-red-500 "}
        >
          {typedChar}
        </span>
      );

      setInputValue((prev) => [...prev, newSpan]);
      setWordIndex((prev) => prev + 1);
    };

    window.addEventListener("keydown", KeyDown);
    return () => window.removeEventListener("keydown", KeyDown);
  }, [wordIndex, wordArray, currentWord, wrongChars]);

  return (
    <div className="h-20 w-100 bg-white items-center flex mt-5 text-3xl pl-5">
      {/* napsané znaky */}
      <span>{inputValue}</span>
      {/* zbývající znaky */}
      <span className="text-gray-400">
        {wordArray.slice(wordIndex).join("")}
      </span>
    </div>
  );
}

export default InputField;
