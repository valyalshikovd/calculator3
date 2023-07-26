import {useEffect, useState} from "react";
import Menu from "./Menu";
import {Button, ButtonGroup, createTheme} from "@mui/material";

function BasicVersion(props) {
    const [firstOper, setFirstOper] = useState(null)
    const [secondOper, setSecondOper] = useState(null)
    const [action, setAction] = useState(null)
    const [answer, setAnswer] = useState(null)
    const theme = createTheme({
        typography: {
            fontSize: 40,
        },
    });
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
    return (<div className={"square"}>
                <div className={"my-div"}>
                    <h1>{firstOper} {action} {secondOper} {(answer) ? "=" : null} {answer}</h1>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button color="primary" onClick={() => {
                            handleNumber("1")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>1</Button>

                        <Button color="primary" onClick={() => {
                            handleNumber("2")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>2</Button>
                        <Button color="primary" onClick={() => {
                            handleNumber("3")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>3</Button>
                        <Button color="primary" onClick={() => {
                            handleAction("+")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>+</Button>

                    </ButtonGroup>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button style={props.theme}
                                theme={theme}
                                onClick={() => {
                                    handleNumber("4")
                                }}
                                sx={props.sizeButton}>4</Button>
                        <Button onClick={() => {
                            handleNumber("5")
                        }}
                                style={props.theme}
                                theme={theme}
                                sx={props.sizeButton}>5</Button>
                        <Button onClick={() => {
                            handleNumber("6")
                        }}
                                style={props.theme}
                                theme={theme}
                                sx={props.sizeButton}>6</Button>
                        <Button onClick={() => {
                            handleAction("-")
                        }}
                                style={props.theme}
                                theme={theme}
                                sx={props.sizeButton}>-</Button>
                    </ButtonGroup>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => {
                            handleNumber("7")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>7</Button>
                        <Button onClick={() => {
                            handleNumber("8")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>8</Button>
                        <Button onClick={() => {
                            handleNumber("9")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>9</Button>
                        <Button onClick={() => {
                            handleAction("*")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>*</Button>
                    </ButtonGroup>
                </div>
                <div className={"my-div-btn"}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => {
                            handleClear()
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>cl</Button>
                        <Button onClick={() => {
                            handleNumber("0")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>0</Button>
                        <Button onClick={() => {
                            handleGetResult()
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}>=</Button>
                        <Button onClick={() => {
                            handleAction("/")
                        }} sx={props.sizeButton}
                                theme={theme}
                                style={props.theme}
                        >/</Button>
                    </ButtonGroup>
                </div>
            </div>

    );
}

export default BasicVersion;
