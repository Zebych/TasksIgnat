import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType =DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    value?:number
}

const SuperCloneRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        onChange,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    return (
        <>
           {/* DoubleRange*/}
            <input
                type={'range'}
                onChange={onChangeCallback}
                value={value}
               /* onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps}*//>
        </>
    )
}

export default SuperCloneRange
