import Menu from "./Menu";
import {Button, ButtonGroup, createTheme} from "@mui/material";
import {useEffect, useState} from "react";
import BasicVersion from "./BasicVersion";


function ExtendedVersion(props) {

    const [textField, setTextField] = useState(" ")
    const [answer, setAnswer] = useState(null)
    const [sizeButton, setSizeButton] = useState({width: 120, height: 100})
    const theme = createTheme({
        typography: {
            fontSize: 40,
        },
    });

    const handleAddExpression = (string) => {
        setTextField(textField + string)
    }
    const handleClear = () => {
        setTextField("")
    }
    useEffect( () => {
            handleGetAnswer()
    }
    )
    const handleGetAnswer = () => {
        try {
            setAnswer(eval(textField))
        } catch (e) {

        }
    }
    return (
        <div className="square">
            <div className={"my-div"}>
                <h1>{textField} {(answer) ? "=" : null} {answer}</h1>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button color="primary" onClick={() => {
                        handleAddExpression("1")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>1</Button>

                    <Button color="primary" onClick={() => {
                        handleAddExpression("2")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>2</Button>
                    <Button color="primary" onClick={() => {
                        handleAddExpression("3")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>3</Button>
                    <Button color="primary" onClick={() => {
                        handleAddExpression("+")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>+</Button>

                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button style={props.theme}
                            onClick={() => {
                                handleAddExpression("4")
                            }}
                            theme={theme}
                            sx={sizeButton}>4</Button>
                    <Button onClick={() => {
                        handleAddExpression("5")
                    }}
                            style={props.theme}
                            theme={theme}
                            sx={sizeButton}>5</Button>
                    <Button onClick={() => {
                        handleAddExpression("6")
                    }}
                            style={props.theme}
                            theme={theme}
                            sx={sizeButton}>6</Button>
                    <Button onClick={() => {
                        handleAddExpression("-")
                    }}
                            style={props.theme}
                            theme={theme}
                            sx={sizeButton}>-</Button>
                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => {
                        handleAddExpression("7")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>7</Button>
                    <Button onClick={() => {
                        handleAddExpression("8")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>8</Button>
                    <Button onClick={() => {
                        handleAddExpression("9")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>9</Button>
                    <Button onClick={() => {
                        handleAddExpression("*")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>*</Button>
                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => {
                        handleClear()
                        setAnswer("")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>CL</Button>
                    <Button onClick={() => {
                        handleAddExpression("0")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>0</Button>
                    <Button onClick={() => {
                        handleAddExpression(".")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>.</Button>
                    <Button onClick={() => {
                        handleAddExpression("/")
                    }} sx={sizeButton}
                            theme={theme}
                            style={props.theme}>/</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default ExtendedVersion;
