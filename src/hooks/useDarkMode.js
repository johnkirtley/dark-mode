import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    const toggleDarkMode = (e) => {
        e.preventDefault();
        return darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    useEffect(() => {
        if (darkMode === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);

    return [darkMode, setDarkMode, toggleDarkMode];

}