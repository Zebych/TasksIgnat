import React, {useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";

export type ThemesType = 'dark' | 'red' | 'some'

const themes = ['dark', 'red', 'some'];

function HW12() {
    const [valueThemes, setValueThemes] = useState(themes[0])
    const dispatch = useDispatch()
    const isTheme = useSelector<AppStoreType>(state => state.theme.theme)
    const theme = valueThemes; // useSelector

    // useDispatch, onChangeCallback
    const onChangeCallback = (option: ThemesType) => {
        setValueThemes(option)
        dispatch(changeThemeC(option))
    }
    console.log(isTheme)
    console.log(theme)
    console.log(valueThemes)
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={valueThemes}
                    onChangeOption={onChangeCallback}
                />
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
