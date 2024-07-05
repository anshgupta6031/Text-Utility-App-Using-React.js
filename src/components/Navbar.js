

//  write 'rfc' for emmet for below code.......

import React from 'react'
import PropTypes from 'prop-types'                      //  write 'impt' for emmet..........


export default function Navbar(props) {
    return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>                  {/* the title sent as a prop is used..... */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">{props.home}</a>                {/* used the default prop. */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">{props.aboutText}</a>
                    </li>
                </ul>
                <form className="d-flex mx-4" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-secondary" type="submit">Search</button>
                </form>

                <div className={`form-check form-switch text-${(props.mode === "dark")? "light" : "dark"}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>
    
  )
}


Navbar.propTypes = {title : PropTypes.string.isRequired,                    //  it is required to be passed or a default should to be set......
                    aboutText : PropTypes.string,
                    home : PropTypes.string,
}                                                   //  setting all the datatypes for the props.....


Navbar.defaultProps = {
    title : "set title here",
    aboutText : "set about here",
    home : "Home",
}                                               //  default values of props are set like this.....



//  NOTE :- Props are read-only.
