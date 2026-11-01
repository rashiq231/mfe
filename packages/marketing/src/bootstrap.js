import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

const mount =(el)=>{
    if(el) {
        ReactDom.render(
            <App/>,
            el
        )
    }
} 

if(process.env.NODE_ENV==='development') {
    const devEle = document.querySelector('#_marketing-dev-root')
    if(devEle) {
        mount(devEle);
    }
}

export { mount }