import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: number) => void
    onChangeDoubleRange?: (value: number) => void
    // onChangeRange?: (value: [number, number]) => void
    // value?: [number, number]
    value1?: number
    value2?: number
    // min, max, step, disable, ...
}

const SuperDoubleRangeCustomize: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value1, value2,
        onChange, onChangeDoubleRange
        // min, max, step, disable, ...
    }
) => {
/*    const value=(value2:number,value1:number)=>{
        if(onChangeRange && onChangeDoubleRange){
            if(+e.currentTarget.value>value2){
                onChangeDoubleRange(+e.currentTarget.value+value1)
            }
            if(+e.currentTarget.value<value1){
                onChangeRange(+e.currentTarget.value+value2)
            }
            onChangeRange(+e.currentTarget.value)
        }
    }*/
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность
        onChangeRange && onChangeRange(+e.currentTarget.value)

    }
    const onChangeDoubleRangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeDoubleRange && onChangeDoubleRange(+e.currentTarget.value)


        // onChangeDoubleRange && onChangeDoubleRange(+e.currentTarget.value)
    }

    // const sliders = document.querySelectorAll('input[type="range"]');
    /*    sliders[0].addEventListener('input', (e) => {
            if(+sliders[0].value > +sliders[1].value){
                sliders[1].value = +sliders[0].value;
            }
        });

        sliders[1].addEventListener('input', (e) => {
            if(+sliders[1].value < +sliders[0].value){
                sliders[0].value = +sliders[1].value;
            }
        });*/
    /*    sliders.forEach((slider) => {
            slider.addEventListener('change', () => {
                console.log(`from ${value} to ${value}`);
            })
        })*/

    return (
        <div className={s.container}>
            {/* DoubleRange*/}

            <input onChange={onChangeCallback}
                   type={'range'}
                   min="0" step="1" max="100"
            />
            <input
                onChange={onChangeDoubleRangeCallback}
                type={'range'}
                min="0" step="1" max="100"
            />
        </div>
    )
}

export default SuperDoubleRangeCustomize
