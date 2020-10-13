import React from "react"

export const themes = {
    dark: {
        background: "#02266D",
        color: "white",
        fill: "white",
        borderColor: "white"
    },
    light: {
        background: "white",
        color: "#02266D",
        fill: "#02266D",
        borderColor: "#02266D"
    }
}

export const ThemeContext = React.createContext(null);