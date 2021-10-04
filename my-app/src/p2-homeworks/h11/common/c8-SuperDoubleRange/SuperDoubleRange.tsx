import React from 'react'
import RangeSlider from "./RangeSlider";

type SuperDoubleRangePropsType =  {
    onChangeRange?: (value: number) => void
    value?: number
    handleChangeDouble:(value:number[])=>void
    valueRange:number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
         value,onChangeRange,
        handleChangeDouble,valueRange,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
const handleChange=(value:number[])=>{
        handleChangeDouble(value)
    }

    return (
        <>
            <RangeSlider valueRange={valueRange} handleChange={handleChange} value={value} />
        </>
    )
}

export default SuperDoubleRange
