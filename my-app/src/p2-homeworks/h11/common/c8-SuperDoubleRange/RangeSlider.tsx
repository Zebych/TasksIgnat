import React, {useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import {createTheme, ThemeProvider} from "@material-ui/core";

const theme = createTheme({
    overrides: {
        MuiSlider: {
            root: {
                width: "130px",
                margin: "10px",
                color: "#0075ff",
            },
            rail: {
                height: "10px",
                borderRadius: "5px",
            },
            track: {
                height: "10px",
            },
            thumb: {
                width: "16px",
                height: "16px",
                marginTop: "-3px"
            }
        }
    }

})

type RangeSliderPropsType = {
    value?: number
    handleChange: (value: number[]) => void
    valueRange: number[]
}

export default function RangeSlider(props: RangeSliderPropsType) {
    const [value, setValue] = React.useState<number[]>([0, 100])
    useEffect(() => {
        setValue(props.valueRange)
    }, [props.value])

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[])
        props.handleChange(newValue as number[])
    };

    return (
        <ThemeProvider theme={theme}>
            <Slider value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="range-slider"/>
        </ThemeProvider>
    );
}
