import Menu from "./Menu";
import {Button, ButtonGroup, createTheme} from "@mui/material";
import {useEffect, useState} from "react";
import BasicVersion from "./BasicVersion";
import Buttons1 from "./Buttons1";


function ExtendedVersion(props) {

    const [textField, setTextField] = useState(" ")
    const [answer, setAnswer] = useState(null)
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
            <Buttons1
                theme={props.theme}
                setTheme={props.setTheme}
                sizeButton={props.sizeButton}
                setSizeButton={props.setSizeButton}
                handleAddExpression={handleAddExpression}
                handleClear={handleClear}
                setAnswer={setAnswer}
            ></Buttons1>
        </div>
    )
}

export default ExtendedVersion;
