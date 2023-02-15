import React from 'react'
import './Navbar.css'
import {CgShoppingCart} from 'react-icons/cg'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const selector = useSelector((state) => state.cart)

    return (
        <nav>
            <h1>E-commerce</h1>
            <span><CgShoppingCart />{selector.length}</span>
        </nav>
    )
}

export default Navbar
