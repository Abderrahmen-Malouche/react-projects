import { useState, useEffect, useRef, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [numberChecked, setNumberChecked] = useState(false);
  const [characterChecked, setCharacterChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let numberChars = "0123456789";
    let specialChars = '!@#$%^&*()_+{}|:"<>?';
    let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberChecked) allChars += numberChars;
    if (characterChecked) allChars += specialChars;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let random = Math.floor(Math.random() * allChars.length);
      password += allChars[random];
    }
    setPassword(password);
  }, [passwordLength, numberChecked, characterChecked]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, numberChecked, characterChecked]);

  const handleCopyPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text to clipboard
      navigator.clipboard.writeText(passwordRef.current.value)
    }
  };
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="outline-zinc-950 border-t-violet-600 bg-white rounded-xl px-4 py-2 flex flex-col gap-4 flex-wrap text-sm">
        <div className="flex gap-4">
          <input
            type="text"
            readOnly
            className="border-blue-500 border-2 px-2 text-black rounded-xl"
            placeholder="Password"
            value={password}
            ref={passwordRef}
          />
          <button
            className="p-4 border-2 bg-blue-600 rounded-xl text-lg"
            onClick={() => generatePassword()}
          >
            Regenerate
          </button>
          <button
            className="p-4 border-blue-600 text-blue-600 text-lg"
            onClick={()=>handleCopyPassword()}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <input
            type="range"
            defaultValue={10}
            max={20}
            min={1}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            value="numbers"
            onClick={() => setNumberChecked(!numberChecked)}
          />
          <label for="numbers" className="text-black text-xl">
            {" "}
            Numbers
          </label>
          <input
            type="checkbox"
            id="characters"
            name="characters"
            value="characters"
            onClick={() => setCharacterChecked(!characterChecked)}
          />
          <label for="characters" className="text-black text-xl">
            {" "}
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
