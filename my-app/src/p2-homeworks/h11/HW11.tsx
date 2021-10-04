import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperCloneRange from './common/c8-SuperCloneRange/SuperCloneRange'
import SuperDoubleRangeCustomize from "./common/c8-SuperDoubleRangeCustomize/SuperDoubleRangeCustomize";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value, setValue] = React.useState<number>(100);

    useEffect(() => {
        handleChangeDouble([value1, value])
    }, [value1])

    let valueRange = [value1, value]

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const handleChangeDouble = (value: number[]) => {
        setValue1(value[0])
        setValue(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperCloneRange value={value1}
                                 onChangeRange={onChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value}</span>
            </div>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    valueRange={valueRange}
                    value={value1}
                    onChangeRange={onChangeRange}
                    handleChangeDouble={handleChangeDouble}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value}</span>
            </div>
            {/* <div>
                <span>{value1}</span>
                <SuperDoubleRangeCustomize value1={value1}
                                  value2={value2}
                                  onChangeRange={onChangeRange}
                                  onChangeDoubleRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
