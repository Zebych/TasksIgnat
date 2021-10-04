import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from "./Header.module.css"

function Header() {
    return (
        <div>
            <div className={s.header}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>PRE_JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>JUNIOR</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>JUNIOR+</NavLink>
                <div className={s.block}/>
            </div>
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
