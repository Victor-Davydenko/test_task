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

    const onChange = (event)=>{

        if(event.target.id === 'r_input'){
            setColors({...colors,R: +event.target.value})
        }
        if(event.target.id === 'g_input'){
            setColors({...colors,G: +event.target.value})
        }
        if(event.target.id === 'b_input'){
            setColors({...colors,B: +event.target.value})
        }

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
                 <input type="range" id='r_input' min={0} max={255} value={colors.R} onChange={onChange}/>
                 <span>{colors.G}</span>
                 <input type="range" id='g_input' min={0} max={255} value={colors.G} onChange={onChange}/>
                 <span>{colors.B}</span>
                 <input type="range" id='b_input' min={0} max={255} value={colors.B} onChange={onChange}/>
            </div>
            <div className='button_holder'>
                <button className='btn btn-sm btn-primary' onClick={onCancel}>Cancel</button>
                <button className='btn btn-sm btn-primary' onClick={onSubmit}>Submit</button>
                <button className='btn btn-sm btn-primary' onClick={() => setSlidersShower(true)}>Show sliders</button>
            </div>
        </div>
    )
}