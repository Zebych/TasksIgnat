import React, {useCallback} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";

export type ThemesType = 'dark' | 'red' | 'some'

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType,string>(state => state.theme.theme)

    const onChangeCallback = useCallback(function (option: ThemesType) {
        console.log(option)
        dispatch(changeThemeC(option))
    }, [])

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
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
