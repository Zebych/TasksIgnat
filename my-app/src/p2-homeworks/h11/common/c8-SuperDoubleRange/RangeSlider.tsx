import React, {useEffect} from 'react';
import Slider from '@material-ui/core/Slider';


type RangeSliderPropsType = {
    value?: number
    handleChange:(value:number[])=>void
    valueRange:number[]
}
export default function RangeSlider(props: RangeSliderPropsType) {
    const [value, setValue] = React.useState<number[]>([0, 100]);
    useEffect(() => {
        setValue(props.valueRange)
    }, [props.value])

    console.log(props.value)
    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[])
        props.handleChange(newValue as number[])
    };

    return (<Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
        />
    );
}