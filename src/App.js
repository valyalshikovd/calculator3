import './App.css';
import {Button, ButtonGroup} from "@mui/material";
import {useEffect, useState} from "react";
import {pink} from "@mui/material/colors";



function App(){
    const [firstOper, setFirstOper] = useState(null)
    const [secondOper, setSecondOper] = useState(null)
    const [action, setAction] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [sizeButton, setSizeButton] = useState({ width: 120, height: 100})
    const [flagUpdate, setFlagUpdate] = useState(true)
    const [buttonFontSize, setFontSize] = useState("30px")

    useEffect(() => {
        if( 400 > window.innerWidth || 700 > window.innerHeight ){
            if(flagUpdate) {
                setSizeButton({width: 84, height: 70})
            }
            setFlagUpdate(false)
        }
    })



    const handleNumber = (num) => {
        if(!firstOper){
            setFirstOper(num + "")
            return
        }
        if(firstOper && !action){
            setFirstOper(firstOper + num + "")
            return;
        }
        if(action && !secondOper){
            setSecondOper(num+"")
            return
        }
        if(action && secondOper){
            setSecondOper(secondOper + num+ "")
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
        if(action === "+"){
            setAnswer(Number(firstOper) + Number(secondOper))
            return
        }
        if(action === "-"){
            setAnswer(Number(firstOper) - Number(secondOper))
            return
        }
        if(action === "/"){
            setAnswer(Number(firstOper) / Number(secondOper))
            return
        }
        if(action === "*"){
            setAnswer(Number(firstOper) * Number(secondOper))
            return
        }
    }
    const handleAction = (action) => {
        if(answer){
            setFirstOper(answer)
            setSecondOper(null)
            setAnswer(null)
        }
        setAction(action)
    }
  return (
      <div className="square">
        <div className={"my-div"}>
            <h1>{firstOper} {action} {secondOper} { (answer) ? "=" : null} {answer}</h1>
        </div>
        <div className={"my-div-btn"}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button  onClick={() => {handleNumber("1")}} sx={sizeButton}>1</Button>
                <Button  onClick={() => {handleNumber("2")}} sx={sizeButton}>2</Button>
                <Button  onClick={() => {handleNumber("3")}} sx={sizeButton}>3</Button>
                <Button  onClick={() => {handleAction("+")}} sx={sizeButton}>+</Button>
            </ButtonGroup>
        </div>
          <div className={"my-div-btn"}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button  onClick={() => {handleNumber("4")}} sx={sizeButton}>4</Button>
                  <Button  onClick={() => {handleNumber("5")}} sx={sizeButton}>5</Button>
                  <Button  onClick={ () => {handleNumber("6")}} sx={sizeButton}>6</Button>
                  <Button  onClick={() => {handleAction("-")}}  sx={sizeButton}>-</Button>
              </ButtonGroup>
          </div>
          <div className={"my-div-btn"}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => {handleNumber("7")}} sx={sizeButton}>7</Button>
                  <Button onClick={() => {handleNumber("8")}} sx={sizeButton}>8</Button>
                  <Button onClick={() => {handleNumber("9")}} sx={sizeButton}>9</Button>
                  <Button onClick={() => {handleAction("*")}} sx={sizeButton}>*</Button>
              </ButtonGroup>
          </div>
          <div className={"my-div-btn"}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => {handleClear()}} sx={sizeButton}>Очистить</Button>
                  <Button onClick={() => {handleNumber("0")}} sx={sizeButton}>0</Button>
                  <Button onClick={() => {handleGetResult()}} sx={sizeButton}>=</Button>
                  <Button onClick={() => {handleAction("/")}} sx={sizeButton}>/</Button>
              </ButtonGroup>
          </div>
      </div>
  );
}

export default App;
