import React from 'react'
import {Header} from "../components/header/Header";
import {NotFound} from "../components/notfoundblock/NotFound"
import {Footer} from "../components/footer/Footer";
import './NotFoundPage.scss'


export const NotFoundPage = ()=>{
    return(
        <div className='wrapper'>
            <Header />
            <NotFound />
            <Footer />
        </div>
    )
}