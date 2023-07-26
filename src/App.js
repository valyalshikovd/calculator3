import './App.css';
import {Button, ButtonGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {pink} from "@mui/material/colors";
import "bulma/css/bulma.css"
import Menu from "./Menu";
import BasicVersion from "./BasicVersion";
import ExtendedVersion from "./ExtendedVersion";


function App() {
    const [sizeButton, setSizeButton] = useState({width: 120, height: 100})
    const [flagUpdate, setFlagUpdate] = useState(true)
    const [buttonFontSize, setFontSize] = useState("50px")
    const [theme, setTheme] = useState(null)
    const [extendedVersion, setExtendedVersion] = useState(false)

    useEffect(() => {
        if (600 > window.innerWidth || 750 > window.innerHeight) {
            if (flagUpdate) {
                setSizeButton({width: 84, height: 70})
            }
            //setFlagUpdate(false)
        }
    })
    return (
        <div>
            <Menu theme={theme} setTheme={setTheme} extendedVersion={extendedVersion} setExtendedVersion={setExtendedVersion}></Menu>
            <div>
                {extendedVersion ?
                    <ExtendedVersion
                        theme={theme}
                        setTheme={setTheme}
                        sizeButton={sizeButton}
                        setSizeButton={setSizeButton}>
                    </ExtendedVersion>
                    :
                    <BasicVersion
                        theme={theme}
                        setTheme={setTheme}
                        sizeButton={sizeButton}
                        setSizeButton={setSizeButton}>
                    </BasicVersion>
                }
            </div>
        </div>
    );
}

export default App;
