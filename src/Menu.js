import {useState} from "react";

function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleChangeTheme = (theme) => {
        props.setTheme(theme)
    }
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
                    <a className="navbar-item" onClick={() => setShowMenu(!showMenu)}>
                        Home
                    </a>

                    <a className="navbar-item" onClick={() => setShowMenu(!showMenu)} >
                        Extended version
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link"
                        onClick={() => {setShowDropDown(!showDropDown)}}>
                            Change theme
                        </a>
                        {!showDropDown ? "" :
                        <div className="navbar-dropdown">
                            <a className="navbar-item" onClick={() => {handleChangeTheme(null)
                                setShowMenu(!showMenu)}}>
                                Classic
                            </a>
                            <a className="navbar-item" onClick={() => {
                                handleChangeTheme({backgroundColor: "pink", borderColor: "gainsboro"})
                                setShowMenu(!showMenu)}}>
                                Pink
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