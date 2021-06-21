import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}
// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов-контейнерная компонента в которой происходит всё
    const [name, setName] = useState<string>('') // need to fix any-локальное хранилище данных инпута
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any-логика если имя нормально то очищаем ошибку,если имя плохое то очищаем имя
        const trimmedName = event.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName('')
            setError('name is require!')
        }

    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name} ! `)
        setName('')// need to fix-вызываем ф-ию addUserCallback и через замыкание отдаем name,отправляем дальше для добавления в массив
    }
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name) {
            addUser()
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
