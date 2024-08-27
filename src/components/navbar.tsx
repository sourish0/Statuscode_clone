"use client"

import React from 'react'
import NavbarDesktop from './navbarDesktop'
import { useMediaQuery } from 'usehooks-ts'
import NavbarMobile from './NavbarMobile'

const navbar = () => {
const isDesktop=useMediaQuery("(min-width:640px)",{
    initializeWithValue:false,
});
    if (isDesktop){
        return(<NavbarDesktop/>)
    }
    return (<NavbarMobile/>)
    
}

export default navbar