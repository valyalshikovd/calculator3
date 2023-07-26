import {useCallback, useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, createTheme} from "@mui/material";

function Buttons1(props) {                //добавлялка текста, тема
    const theme = createTheme({
        typography: {
            fontSize: 40,
        },
    });
    const buttons1 = ["1",'2','3',"+",'4','5','6','-','7','8','9','*','CL','0','.','/','(',')','%' ]
    const buttons2 = ["(",')','sin',"cos",'tg','ctg','%','.','ln','^','','','','','->','' ]
    const [currButtons, serCurrButtons] = useState(buttons1)
    return (
        <div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button color="primary" onClick={() => {
                        props.handleAddExpression(currButtons[0])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[0]}</Button>

                    <Button color="primary" onClick={() => {
                        props.handleAddExpression(currButtons[1])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[1]}</Button>
                    <Button color="primary" onClick={() => {
                        props.handleAddExpression(currButtons[2])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[2]}</Button>
                    <Button color="primary" onClick={() => {
                        props.handleAddExpression(currButtons[3])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[3]}</Button>

                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button style={props.theme}
                            onClick={() => {
                                props.handleAddExpression(currButtons[4])
                            }}
                            theme={theme}
                            sx={props.sizeButton}>{currButtons[4]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[5])
                    }}
                            style={props.theme}
                            theme={theme}
                            sx={props.sizeButton}>{currButtons[5]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[6])
                    }}
                            style={props.theme}
                            theme={theme}
                            sx={props.sizeButton}>{currButtons[6]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[7])
                    }}
                            style={props.theme}
                            theme={theme}
                            sx={props.sizeButton}>{currButtons[7]}</Button>
                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[8])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[8]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[9])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[9]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[10])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[10]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[11])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[11]}</Button>
                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => {
                        props.handleClear()
                        props.setAnswer("")
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[12]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[13])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[13]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[14])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[14]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[15])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[15]}</Button>
                </ButtonGroup>
            </div>
            <div className={"my-div-btn"}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[16])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[16]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[17])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[17]}</Button>
                    <Button onClick={() => {
                        props.handleAddExpression(currButtons[18])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>{currButtons[18]}</Button>
                    <Button onClick={() => {
                        props.handleBackExpression(currButtons[18])
                    }} sx={props.sizeButton}
                            theme={theme}
                            style={props.theme}>Back</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Buttons1