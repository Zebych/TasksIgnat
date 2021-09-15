import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";

function Header() {
    return (
        <div>
            <div>
                <NavLink to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR}>JUNIOR</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>
            </div>
        </div>
    )
}

export default Header
