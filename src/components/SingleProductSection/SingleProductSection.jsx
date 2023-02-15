import React, { useEffect, useRef } from 'react'
import SingleProduct from '../SingleProduct/SingleProduct'
import './SingleProductSection.css'


const SingleProductSection = ({ setActive, item, setCurrentActive}) => {    
    const productListRef = useRef()
    const callbackFuntion = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(prev => !prev)
                setCurrentActive(parseInt(entry.target.id));
            }        
        })
    }

    const botGap = window.innerHeight - 400
    const options = {
        root: null,
        rootMargin: `-132px -0px -${botGap}px -0px`,
        threshold: 0.3
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFuntion, options)
        if (productListRef.current) {
            observer.observe(productListRef.current)
        }

        return () => {
            if (productListRef.current) {
                observer.unobserve(productListRef.current)
            }
        }
    }, [productListRef])

    return (
        <div id={item?.product_category_name?.id} ref={productListRef} className='single-product-section' >
            <h3 >{item?.product_category_name?.category}<span>{'>'}</span> <span>view all</span> </h3>
            <div className="inner-container">
                {
                    item?.product_category_items?.map(item => <SingleProduct key={item?.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default SingleProductSection
