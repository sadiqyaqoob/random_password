import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { LC, NC, SC, UC } from "./data/Passchar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passwardlen, setpasswardlen] = useState(10);
  let [fpass, setfpass] = useState("");

  let creatPassward = () => {
    let charSet = "";
    let finalpass = "";
    if (uppercase || lowercase || number || symbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbol) charSet += SC;

      for (let i = 0; i < passwardlen; i++) {
        finalpass += charSet.charAt(Math.floor(Math.random() * charSet.length));

      }
      setfpass(finalpass)
      toast.success(" password Generate 😎");
    } else {
      toast.error("Please select at least one option! 🚫");
    }
  };

  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className="passward-box">
        <h1>Password Generator</h1>

        <div className="passwordboxin">
          <input type="text" readOnly value={fpass}/> <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passlength">
          <label>Password Length</label>
          <input
            type="number"
            min={10}
            max={20}
            value={passwardlen}
            onChange={(event) => setpasswardlen(event.target.value)}
          />
        </div>

        <div className="passlength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passlength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="passlength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
        </div>

        <button
          className="btn"
          onChange={creatPassward}
          onClick={creatPassward}
        >
          Generate Password
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
