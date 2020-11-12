import React from 'react'
import {Header} from "../components/header/Header";
import {CentralBlock} from "../components/centralBlock/CentralBlock";
import {MainArticle} from "../components/mainArticle/MainArticle"
import {Footer} from "../components/footer/Footer";
import './RootPage.scss'


export const RootPage = ()=>{
    return(
        <div className='wrapper'>
           <Header />
            <CentralBlock children={<MainArticle />}/>
           <Footer />
        </div>
    )
}