import React from 'react'
import {Header} from "../components/header/Header";
import {CentralBlock} from "../components/centralBlock/CentralBlock";
import {ColorPicker} from "../components/colorPicker/ColorPicker";
import {Footer} from "../components/footer/Footer";
import './ColorPickerPage.scss'


export const ColorPickerPage = ()=>{
    return(
        <div className='wrapper'>
            <Header />
            <CentralBlock children={<ColorPicker />}/>
            <Footer />
        </div>
    )
}