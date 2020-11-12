import React from 'react'
import './NotFound.scss'

export const NotFound = ()=>{
    return(
        <div className='container wrapper_inner'>
            <div className='row_404'>404</div>
            <div className='row_notFound'>Opps,page is not found</div>
            <div className='row_explanation'>Sorry, the page you're looking for doesn't exist!</div>
        </div>
    )
}