import React, { useState, useEffect } from "react";
import wordList from "./WordList";

function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [uniqueKey, setUniqueKey] = useState(0);
  const AllowedKeys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?Backspace";
  const [wordArray, setWordArray] = useState(() => wordList[0].split(""));

  useEffect(() => {
    const KeyDown = (event) => {
      if (!AllowedKeys.includes(event.key)) return;

      if (event.key === "Backspace") {
        setWordIndex((prevIndex) => {
          if (prevIndex === 0) return 0;
          const newIndex = prevIndex - 1;

          setWordArray((prevArr) => {
            const newArr = [...prevArr];
            const item = prevArr[newIndex];
            
            newArr[newIndex] = item.props.children; 

            
            return newArr;
          });

          setInputValue((prev) => prev.slice(0, -1));
          return newIndex;
        });
        return;
      }

      setWordArray((prevArray) => {
        const newArray = [...prevArray];
        const idx = wordIndex;
        const currentChar = prevArray[idx];


        if (event.key === currentChar) {
          newArray[idx] = (
            <span className="text-green-500" key={"Key" + uniqueKey}>
              {currentChar}
            </span>
          );
        } else {
          newArray[idx] = (
            <span className="text-red-500" key={"Key" + uniqueKey}>
              {currentChar}
            </span>
          );
        }

        return newArray;
      });

      setUniqueKey((prev) => prev + 1);
      setWordIndex((prev) => prev + 1);
      setInputValue((prev) => prev + event.key);
    };

    window.addEventListener("keydown", KeyDown);
    return () => window.removeEventListener("keydown", KeyDown);
  }, [AllowedKeys, uniqueKey, wordIndex]);

  return (
    <div className="h-20 w-100 bg-white items-center flex mt-5 text-3xl pl-5">
      <span className="text-black">{wordArray}</span>
    </div>
  );
}

export default InputField;
