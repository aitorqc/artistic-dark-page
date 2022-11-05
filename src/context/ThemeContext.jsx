import { useReducer } from "react";
import { createContext } from "react";
import ThemeList from "../data/ThemeList";

export const ThemeContext = createContext();

const lightTheme = ThemeList.light;
const darkTheme = ThemeList.dark;

const themeReducer = (state, action) => {
    console.log("llamada");
    switch (action.type) {
        case "TOGGLE_THEME":
            localStorage.setItem('theme', state.theme === darkTheme ? lightTheme : darkTheme);
            return {
                theme: state.theme === darkTheme ? lightTheme : darkTheme,
            };

        default:
            return state;
    }
}

const ThemeContextProvider = (props) =>{
    const getInitialTheme = () => {
        const theme = localStorage.getItem('theme');
        const preferDark = window.matchMedia && window.matchMedia(('prefers-color-scheme:')).matches;

        if(theme){
            return theme;
        }
        if(preferDark){
            return preferDark;
        }
        return lightTheme;
    }

    const initialState = {
        theme: getInitialTheme(),
    }

    const [state, dispatch] = useReducer(themeReducer, initialState)

    const value = {
        theme: state.theme,
        toggleTheme: () => dispatch({type: 'TOGGLE_THEME'}),
    }

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;