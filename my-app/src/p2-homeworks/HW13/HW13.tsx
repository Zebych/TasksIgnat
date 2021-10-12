import React, {ChangeEvent, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkAPITC} from "./reducers/checkbox-reducer";
import RequestAPI from "./RequestAPI";
import {AppStoreType} from "../h10/bll/store";

const HW13 = React.memo(function () {
    const dispatch = useDispatch()
    const errorMessage = useSelector<AppStoreType, string>(state => state.checkbox.errorMessage)
    const checkAPI = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(checkAPITC(e.currentTarget.checked))
    }, [])

    return (
        <div>
            <input type={'checkbox'} onChange={checkAPI}/>
            <RequestAPI errorMessage={errorMessage}/>
        </div>
    );
})

export default HW13;

