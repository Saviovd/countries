import '../styles/global.scss'
import { AppRoutes } from './routes'
import { ThemeProvider } from  'styled-components'
import { GlobalStyle } from '../styles/global'
import {light , dark} from './shared/themes/themes'
import { ThemeContext } from './shared/contexts/themeContext'
import { useState } from 'react'

interface ITheme {

}

function App() {
  const [theme, setTheme] = useState(light)

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme} >
      <div className="App">
        <GlobalStyle/>
        <AppRoutes />
      </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
