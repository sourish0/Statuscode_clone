"use client"

import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import FooterDesktop from './footerDesktop'
import FooterMobile from './footerMobile'

const footer = () => {
const isDesktop=useMediaQuery("(min-width:640px)",{
    initializeWithValue:false,
});
    if (isDesktop){
        return(<FooterDesktop/>)
    }
    return (<FooterMobile/>)
    
}

export default footer