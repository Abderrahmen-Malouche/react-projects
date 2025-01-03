import { useState } from "react";

import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { Currency } from "./Components/index";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("euro");
  const [options, setOptions] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  setOptions(Object.keys(currencyInfo.rates));
  const convert = () => {
    setConvertedAmount(amount * currencyInfo.rates[to]);
  };
  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  return (
    <div
      className="bg-gray-100 h-screen w-full flex flex-col items-center justify-center bg-cover bg-no-repeat bg-opacity-50"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preverntDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <Currency
              label="From"
              amount={amount}
              amountDisabled={false}
              currencyDisabled={false}
              onCurrencyChange={(currency)=>setFrom(currency)}
              onAmountChange={(amount)=>setAmount(amount)}
              currencyOptions={options}
              selectedCurrency={from}
              className=""
            />
          </div>
          <div className=" relative w-full h-0.5">
             <button 
             className="absolute  left-1/2 -translate-x-1/2 
             -translate-y-1/2 border-2 border-white rouned-md bg-blue-600 text-white px-2 py-0.5 "
             onClick={swap}>Swap</button>
          </div>
          <div className="w-full mb-1">
            <Currency
              label="To"
              amount={convertedAmount}
              amountDisabled={true}
              currencyDisabled={true}
              onCurrencyChange={(currency)=>setTo(currency)}
              onAmountChange={(amount)=>setConvertedAmount(amount)}
              currencyOptions={options}
              selectedCurrency={to}
              className=""
            />
          </div>
          <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-lg py-3 px-3">
            Convert from {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
