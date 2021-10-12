import {Dispatch} from "redux";
import {api} from "../../../api/api";

type ActionType = ReturnType<typeof checkboxC> | ReturnType<typeof errorStatus>
type InitStateType = typeof initState
const initState = {
    onChangeCheckbox: false,
    errorMessage: ''
}
export const checkboxReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "CHANGE_CHECKBOX": {
            return {...state, onChangeCheckbox: action.onChangeCheckbox}
        }
        case "ERROR_STATUS": {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default:
            return state
    }

}
//Action
const checkboxC = (onChangeCheckbox: boolean) => ({type: 'CHANGE_CHECKBOX', onChangeCheckbox} as const)
const errorStatus = (errorMessage: string) => ({type: 'ERROR_STATUS', errorMessage} as const)
//Thunk
export const checkAPITC = (onChangeCheckbox: boolean) => (dispatch: Dispatch) => {
    api.putCheckbox(onChangeCheckbox).then((res) => {
        dispatch(checkboxC(res.data.success))
    })
        .catch((error) => dispatch(errorStatus(error.response ? error.response.data.error : error.message)))
}