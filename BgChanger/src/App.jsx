import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div style={{ backgroundColor: color }} className="w-full h-screen">
      <div className="fixed flex flex-wrap px-2 justify-center items-center bg-white rounded-xl bottom-2 left-1/2 text-5xl gap-12 py-4 ">
        <button className="text-red-600 bg-white outline-zinc-950 border-t-violet-600" onClick={()=>setColor("red")}>Red </button>
        <button className="text-green-600 bg-white outline-zinc-950" onClick={()=>setColor("Green")}>Green</button>
        <button className="text-blue-600 bg-white outline-zinc-950" onClick={()=>setColor("Blue")}>Blue</button>
        <button className="text-yellow-600 bg-white outline-zinc-950" onClick={()=>setColor("Yellow")}>Yellow</button>
        <button className="text-black bg-white outline-zinc-950" onClick={()=>setColor("white")}>white</button>
      </div>
    </div>
  );
}

export default App;
