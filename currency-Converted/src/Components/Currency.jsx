import React ,{useId} from "react";

function Currency({
  label,
  amount,
  amountDisabled = false,
  currencyDisabled = false,
  onCurrencyChange,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  className = "",
}) {
  return (
    <div className={`${className} bg-white p-3 rounded-lg text-sm flex`}>
      <div className="flex flex-col items-start gap-4 w-1/2">
        <label htmlFor={id} className="text-gray-600 mb-2 inline-block ">{label}</label>
        <input
          
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-col flex-wrap justify-end gap-4 w-1/2">
        <p className="text-gray-600 w-full mb-2 ">Currency Type</p>
        <select 
        name="" 
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        disabled={currencyDisabled}
        value={selectedCurrency}>
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              selected={currency === selectedCurrency}
              onClick={() => onCurrencyChange && onCurrencyChange(currency)}
            >
              {currency.toUpperCase()}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default Currency;
