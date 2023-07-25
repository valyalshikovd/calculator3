import './App.css';
import {Button, ButtonGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {pink} from "@mui/material/colors";
import "bulma/css/bulma.css"
import Menu from "./Menu";


function App() {
    const [firstOper, setFirstOper] = useState(null)
    const [secondOper, setSecondOper] = useState(null)
    const [action, setAction] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [sizeButton, setSizeButton] = useState({width: 120, height: 100})
    const [flagUpdate, setFlagUpdate] = useState(true)
    const [buttonFontSize, setFontSize] = useState("30px")
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (600 > window.innerWidth || 750 > window.innerHeight) {
            if (flagUpdate) {
                setSizeButton({width: 84, height: 70})
            }
            setFlagUpdate(false)
        }
    })
    const handleSetThemeApp = (theme) => {
        setTheme(theme)
    }

    const handleNumber = (num) => {
        if (!firstOper) {
            setFirstOper(num + "")
            return
        }
        if (firstOper && !action) {
            setFirstOper(firstOper + num + "")
            return;
        }
        if (action && !secondOper) {
            setSecondOper(num + "")
            return
        }
        if (action && secondOper) {
            setSecondOper(secondOper + num + "")
            return
        }
    }
    const handleClear = () => {
        setFirstOper(null)
        setSecondOper(null)
        setAction(null)
        setAnswer(null)
    }
    const handleGetResult = () => {
        if (action === "+") {
            setAnswer(Number(firstOper) + Number(secondOper))
            return
        }
        if (action === "-") {
            setAnswer(Number(firstOper) - Number(secondOper))
            return
        }
        if (action === "/") {
            setAnswer(Number(firstOper) / Number(secondOper))
            return
        }
        if (action === "*") {
            setAnswer(Number(firstOper) * Number(secondOper))
            return
        }
    }
    const handleAction = (action) => {
        if (answer) {
            setFirstOper(answer)
            setSecondOper(null)
            setAnswer(null)
        }
        setAction(action)
    }
    return (
        <div>
            <Menu theme={theme} setTheme={setTheme}></Menu>
            <div className="square">
                <div className={"my-div"}>
                    <h1>{firstOper} {action} {secondOper} {(answer) ? "=" : null} {answer}</h1>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button color="primary" onClick={() => {
                            handleNumber("1")
                        }} sx={sizeButton}
                                style={theme}>1</Button>

                        <Button color="primary" onClick={() => {
                            handleNumber("2")
                        }} sx={sizeButton}
                                style={theme}>2</Button>
                        <Button color="primary" onClick={() => {
                            handleNumber("3")
                        }} sx={sizeButton}
                                style={theme}>3</Button>
                        <Button color="primary" onClick={() => {
                            handleAction("+")
                        }} sx={sizeButton}
                                style={theme}>+</Button>

                    </ButtonGroup>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button style={theme}
                                onClick={() => {
                                    handleNumber("4")
                                }}
                                sx={sizeButton}>4</Button>
                        <Button onClick={() => {
                            handleNumber("5")
                        }}
                                style={theme}
                                sx={sizeButton}>5</Button>
                        <Button onClick={() => {
                            handleNumber("6")
                        }}
                                style={theme}
                                sx={sizeButton}>6</Button>
                        <Button onClick={() => {
                            handleAction("-")
                        }}
                                style={theme}
                                sx={sizeButton}>-</Button>
                    </ButtonGroup>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => {
                            handleNumber("7")
                        }} sx={sizeButton}
                                style={theme}>7</Button>
                        <Button onClick={() => {
                            handleNumber("8")
                        }} sx={sizeButton}
                                style={theme}>8</Button>
                        <Button onClick={() => {
                            handleNumber("9")
                        }} sx={sizeButton}
                                style={theme}>9</Button>
                        <Button onClick={() => {
                            handleAction("*")
                        }} sx={sizeButton}
                                style={theme}>*</Button>
                    </ButtonGroup>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => {
                            handleClear()
                        }} sx={sizeButton}
                                style={theme}>Очистить</Button>
                        <Button onClick={() => {
                            handleNumber("0")
                        }} sx={sizeButton}
                                style={theme}>0</Button>
                        <Button onClick={() => {
                            handleGetResult()
                        }} sx={sizeButton}
                                style={theme}>=</Button>
                        <Button onClick={() => {
                            handleAction("/")
                        }} sx={sizeButton}
                                style={theme}>/</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default App;
