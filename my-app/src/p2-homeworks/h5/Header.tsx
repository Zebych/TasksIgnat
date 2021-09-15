import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                <NavLink to={'/pre-junior'}>PRE_JUNIOR</NavLink>
            </div>
            <div>
                <NavLink to={'/junior-plus'}>JUNIOR_PLUS</NavLink>
            </div>
        </div>
    )
}

export default Header
