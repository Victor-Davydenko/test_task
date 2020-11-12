import React, {useState} from 'react'
import './ColorPicker.scss'

export const ColorPicker = ()=> {
    const [stateRed, setStateRed] = useState(0)
    const [stateGreen, setStateGreen] = useState(0)
    const [stateBlue, setStateBlue] = useState(0)
    const [value, setValue] = useState('rgb(0,0,0)')
    const [slidersShower, setSlidersShower] = useState(false)

    const onChange = ()=>{
        setValue(`rgb(${stateRed},${stateGreen},${stateBlue})`)
    }

    const onChangeRed = (event)=>{
        setStateRed(+event.target.value)
        onChange()
    }

    const onChangeGreen = (event)=>{
        setStateGreen(+event.target.value)
        onChange()
    }

    const onChangeBlue = (event)=>{
        setStateBlue(+event.target.value)
        onChange()
    }

    const onSubmit = ()=>{
        setValue(`rgb(${stateRed},${stateGreen},${stateBlue})`)
    }

    const onCancel = ()=>{
        if (stateRed !== 0 || stateGreen !== 0 || stateBlue !== 0) {
            setValue('rgb(0,0,0)')
            setStateRed(0)
            setStateGreen(0)
            setStateBlue(0)
            setSlidersShower(false)
        }
    }
    return (
        <div className="colorPicker">
            <div id="square" style={{backgroundColor: `${value}`}}></div>
             <div className={`${slidersShower? "inputs_holder":"inputs_holder hidden"}`}>
                <span>{stateRed}</span>
                <input type="range" id='r_input' min={0} max={255} value={stateRed} onChange={(event)=>onChangeRed(event)}/>
                <span>{stateGreen}</span>
                <input type="range" id='g_input' min={0} max={255} value={stateGreen} onChange={(event)=>onChangeGreen(event)}/>
                <span>{stateBlue}</span>
                <input type="range" id='b_input' min={0} max={255} value={stateBlue} onChange={(event)=>onChangeBlue(event)}/>
            </div>
            <div className='button_holder'>
                <button className='btn btn-sm btn-primary' onClick={onCancel}>Cancel</button>
                <button className='btn btn-sm btn-primary' onClick={onSubmit}>Submit</button>
                <button className='btn btn-sm btn-primary' onClick={() => setSlidersShower(true)}>Show sliders</button>
            </div>
        </div>
    )
}