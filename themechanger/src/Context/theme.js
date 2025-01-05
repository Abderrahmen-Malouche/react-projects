import {useContext,createContext} from "react";

export const ThemeContext=createContext(
    {
        theme:"light",
        switchLighTheme:()=>{},
        switchDarkTheme:()=>{}
    }
);

export const ThemeContextProvider=ThemeContext.Provider;

export const  useTheme=()=>useContext(ThemeContext);