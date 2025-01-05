import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import ThemeBtn from './components/ThemeBtn.jsx'
import {ThemeContextProvider} from './Context/theme.js'
import { useEffect } from 'react'
function App() {
  const [theme,setTheme]=useState("light");
  const switchLighTheme=()=>{
    setTheme("light")
  };
  const switchDarkTheme=()=>{
    setTheme("dark")
  };
  useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light");
    document.querySelector("html").classList.add(theme);
  },[theme]);
  return (
    <ThemeContextProvider value={{theme,switchLighTheme,switchDarkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
