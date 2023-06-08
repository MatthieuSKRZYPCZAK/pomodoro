import { useContext } from 'react';
import './DarkMode.css';
import { ThemeContext } from './Contexts/Theme';
import { WiDaySunny, WiMoonWaningCrescent1 } from 'react-icons/wi';

function DarkMode() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const ChangeTheme = () => {
    toggleTheme();
    };

    return (
    <label className='switchTheme'>
        <input type="checkbox" onChange={ChangeTheme} />
        {
            theme === 'light' ?
            <WiMoonWaningCrescent1 size={'40px'} color={'rgb(112, 112, 235)'} /> 
            : 
            <WiDaySunny size={'40px'} />
        }
    </label>
    );
}

export default DarkMode;