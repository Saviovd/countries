import { createContext } from "react";

type IContextTheme = {
    theme: Object
    setTheme: any
} 

export const ThemeContext = createContext<IContextTheme>({} as IContextTheme);

