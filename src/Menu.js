import {useState} from "react";

function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

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
            <div className={showMenu ? 'navbar-menu is-active' : 'navbar-menu'}
                 onClick={() => setShowMenu(!showMenu)}>
                <div className={"navbar-start"}>
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Extended version
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Change theme
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" onClick={() => handleChangeTheme(null)}>
                                Classic
                            </a>
                            <a className="navbar-item" onClick={() => handleChangeTheme({backgroundColor: "pink", borderColor: "gainsboro"})}>
                                Pink
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu