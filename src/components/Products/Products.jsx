import React from 'react'
import SingleProductSection from '../SingleProductSection/SingleProductSection'
import './Products.css'


const Products = ({ setActive, data, setCurrentActive }) => {

    return (
        <div className='products'>
            {
                data?.map((item, index) => <SingleProductSection
                    key={index}
                    setCurrentActive={setCurrentActive}
                    setActive={setActive}
                    item={item}
                />)
            }
            
        </div>
    )
}

export default Products
