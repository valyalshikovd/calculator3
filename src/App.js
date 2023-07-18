import './App.css';
import {Button, ButtonGroup} from "@mui/material";
import {useState} from "react";
import {pink} from "@mui/material/colors";



function App(){
    const [firstOper, setFirstOper] = useState(null)
    const [secondOper, setSecondOper] = useState(null)
    const [action, setAction] = useState(null)
    const [answer, setAnswer] = useState(null)

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
                <Button  onClick={() => {handleNumber("1")}} sx={{ width: 120, height: 100}} >1</Button>
                <Button  onClick={() => {handleNumber("2")}} sx={{ width: 120, height: 100}}>2</Button>
                <Button  onClick={() => {handleNumber("3")}} sx={{ width: 120, height: 100}}>3</Button>
                <Button  onClick={() => {handleAction("+")}} sx={{ width: 120, height: 100}}>+</Button>
            </ButtonGroup>
        </div>
          <div className={"my-div-btn"}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button  onClick={() => {handleNumber("4")}} sx={{ width: 120, height: 100}}>4</Button>
                  <Button  onClick={() => {handleNumber("5")}} sx={{ width: 120, height: 100}}>5</Button>
                  <Button  onClick={ () => {handleNumber("6")}} sx={{ width: 120, height: 100 }}>6</Button>
                  <Button  onClick={() => {handleAction("-")}}  sx={{ width: 120, height: 100 }}>-</Button>
              </ButtonGroup>
          </div>
          <div className={"my-div-btn"}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => {handleNumber("7")}} sx={{ width: 120, height: 100 }}>7</Button>
                  <Button onClick={() => {handleNumber("8")}} sx={{ width: 120, height: 100 }}>8</Button>
                  <Button onClick={() => {handleNumber("9")}} sx={{ width: 120, height: 100 }}>9</Button>
                  <Button onClick={() => {handleAction("*")}} sx={{ width: 120, height: 100 }}>*</Button>
              </ButtonGroup>
          </div>
          <div className={"my-div-btn"}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button onClick={() => {handleClear()}} sx={{ width: 120, height: 100 }}>Очистить</Button>
                  <Button onClick={() => {handleNumber("0")}} sx={{ width: 120, height: 100 }}>0</Button>
                  <Button onClick={() => {handleGetResult()}} sx={{ width: 120, height: 100 }}>=</Button>
                  <Button onClick={() => {handleAction("/")}} sx={{ width: 120, height: 100 }}>/</Button>
              </ButtonGroup>
          </div>
      </div>
  );
}

export default App;
