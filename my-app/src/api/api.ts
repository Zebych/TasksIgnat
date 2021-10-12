import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com',
})
type CheckboxType = {
    success: boolean,
}
//api
export const api = {
    putCheckbox(onChangeCheckbox: boolean) {
        return instance.post<CheckboxType>('/auth/test', {success: onChangeCheckbox});
    },
}