import React from 'react'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import TemporaryDrawer from "./component/HiddenPanel";
import Header from "./Header";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <TemporaryDrawer/>
                <Routes/>
            </HashRouter>
        </div>
    )
}

export default HW5
