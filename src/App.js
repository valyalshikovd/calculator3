import './App.css';
import {Button, ButtonGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {pink} from "@mui/material/colors";
import "bulma/css/bulma.css"
import Menu from "./Menu";
import ExtendedVersion from "./ExtendedVersion";


function App() {
    const [sizeButton, setSizeButton] = useState({width: 120, height: 100})
    const [flagUpdate, setFlagUpdate] = useState(true)
    const [buttonFontSize, setFontSize] = useState("50px")
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (600 > window.innerWidth || 750 > window.innerHeight) {
            if (flagUpdate) {
                setSizeButton({width: 84, height: 70})
            }
        }
    })
    return (
        <div>
            <Menu theme={theme} setTheme={setTheme}></Menu>
            <div>
                    <ExtendedVersion
                        theme={theme}
                        setTheme={setTheme}
                        sizeButton={sizeButton}
                        setSizeButton={setSizeButton}>
                    </ExtendedVersion>

            </div>
        </div>
    );
}

export default App;
