import { useState, useContext } from "react"
import { BsFillMoonFill, BsMoon } from 'react-icons/bs'
import { ThemeContext } from '../../contexts/themeContext'
import {dark, light} from '../../themes/themes'
import { HeaderStyle } from './styles'

export const Header = () => {
    const [themeIsDark, setThemeIsDark] = useState(true)
    
    const {theme, setTheme} = useContext(ThemeContext)

    function handleTheme() {
        setThemeIsDark(!themeIsDark)
        if (theme === light) {
            setTheme(dark)
        } else if (theme === dark) {
            setTheme(light)
        }
    }

    return (
        <HeaderStyle>
            <h1 className="page_title">Where in the world?</h1>
            <div className="toggle_theme">
                {themeIsDark ? <BsMoon className='moon'/> : <BsFillMoonFill className='moon'/>}
                <p className="theme" onClick={handleTheme}>Dark Mode</p>
            </div>
        </HeaderStyle>
    )
}