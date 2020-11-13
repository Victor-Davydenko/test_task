import React, {useState} from 'react'
import './ColorPicker.scss'

export const ColorPicker = ()=> {
    const [colors, setColors] = useState({
        R:0,
        G:0,
        B:0
    })
    const [value, setValue] = useState(`rgb(${colors.R},${colors.G},${colors.B})`)
    const [slidersShower, setSlidersShower] = useState(true)

    const onChange = (event, key)=>{
        setColors({...colors,[key]: +event.target.value})
        setValue(`rgb(${colors.R},${colors.G},${colors.B})`)
    }

    const onSubmit = ()=>{
         setValue(`rgb(${colors.R},${colors.G},${colors.B})`)
    }

    const onCancel = ()=>{
        if (colors.R !== 0 || colors.G !== 0 || colors.B !== 0) {
            setValue('rgb(0,0,0)')
            setColors({R:0,G:0,B:0})
            setSlidersShower(false)
        }
    }
    return (
        <div className="colorPicker">
            <div id="square" style={{backgroundColor: `${value}`}}></div>
             <div className={`${slidersShower? "inputs_holder":"inputs_holder hidden"}`}>
                 <span>{colors.R}</span>
                 <input type="range"  min={0} max={255} value={colors.R} onChange={(event)=>onChange(event,'R')}/>
                 <span>{colors.G}</span>
                 <input type="range"  min={0} max={255} value={colors.G} onChange={(event)=>onChange(event,'G')}/>
                 <span>{colors.B}</span>
                 <input type="range"  min={0} max={255} value={colors.B} onChange={(event)=>onChange(event,'B')}/>
            </div>
            <div className='button_holder'>
                <button className='btn btn-sm btn-primary' onClick={onCancel}>Cancel</button>
                <button className='btn btn-sm btn-primary' onClick={onSubmit}>Submit</button>
                <button className='btn btn-sm btn-primary' onClick={() => setSlidersShower(true)}>Show sliders</button>
            </div>
        </div>
    )
}