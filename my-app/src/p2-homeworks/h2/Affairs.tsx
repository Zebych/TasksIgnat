import React, {Dispatch, SetStateAction} from 'react'
import s from './Affairs.module.css'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all')
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const cnAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const cnHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const cnMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const cnLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')

    const setClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={set} className={'all'} value={'all'}>All</button>
            <button onClick={set} className={'high'} value={'high'}>High</button>
            <button onClick={set} className={'middle'} value={'middle'}>Middle</button>
            <button onClick={set} className={'low'} value={'low'}>Low</button>

        </div>
    )
}

export default Affairs
