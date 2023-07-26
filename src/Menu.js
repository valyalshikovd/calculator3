import {useCallback, useEffect, useRef, useState} from "react";

function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false)
    const [flagFlashingTheme, setFlagFlashingTheme] = useState(false)
    const [flashingInterval, setFlashingInterval] = useState(null)
    const themeRef = useRef(props.theme);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleChangeTheme = (theme) => {

        clearInterval(flashingInterval);
        props.setTheme(theme)
        setFlagFlashingTheme(false)
    }
    const handleFlashTheme = useCallback(async () => {
        setFlagFlashingTheme(true)
        clearInterval(flashingInterval)
        setFlashingInterval(setInterval(() => {
            if(themeRef.current === null){
                props.setTheme({backgroundColor: "pink", borderColor: "gainsboro"})
                themeRef.current = {backgroundColor: "pink", borderColor: "gainsboro"}
            }else {
                props.setTheme(null)
                themeRef.current = null
            }
        }, 1000))
    }, [props.setTheme]);
    return (
        <nav className={"navbar is-light"}>
            <div className={"navbar-brand"}>
                <div className={({ isActive }) => "navbar-item is-uppercase" +
                    (isActive ? " is-active" : "")}
                >
                </div>
                <div
                   className={showMenu ? "navbar-burger is-active" : "navbar-burger"}
                   onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={showMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className={"navbar-start"} >
                    <a className="navbar-item" onClick={() => {
                        setShowMenu(!showMenu)
                    }}>
                        Home
                    </a>

                    <a className="navbar-item" onClick={() => {
                        setShowMenu(!showMenu)
                    }} >
                        History
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link"
                        onClick={() => {setShowDropDown(!showDropDown)}}>
                            Change theme
                        </a>
                        {!showDropDown ? "" :
                        <div className="navbar-dropdown">
                            <a className="navbar-item" onClick={() => {handleChangeTheme(null)
                                clearInterval(flashingInterval)
                                setShowMenu(!showMenu)}}>
                                Classic
                            </a>
                            <a className="navbar-item" onClick={() => {
                                handleChangeTheme({backgroundColor: "pink", borderColor: "gainsboro"})
                                clearInterval(flashingInterval)
                                setShowMenu(!showMenu)}}>
                                Pink
                            </a>
                            <a className="navbar-item" onClick={() => {
                                if(!flagFlashingTheme) {
                                    handleFlashTheme()
                                }
                                setShowMenu(!showMenu)}}>
                                FlashingTheme
                            </a>
                        </div>

                            }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu