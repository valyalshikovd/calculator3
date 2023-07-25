function Menu(props) {

    const handleChangeTheme = (theme) => {
        props.setTheme(theme)
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
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