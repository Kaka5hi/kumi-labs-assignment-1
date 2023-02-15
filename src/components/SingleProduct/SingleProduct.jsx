import React from 'react'
import './SingleProduct.css'
import { useDispatch } from 'react-redux'
import { add, remove } from '../../store/cartSlice'

const SingleProduct = ({ item }) => {
    
    const dispatch = useDispatch()

    const [show, setShow] = React.useState(false)

    const handleAdd = (item) => {
        dispatch(add(item));
        setShow(prev => !prev)
    }

    const handleRemove = (id) => {
        dispatch(remove(id));
        setShow(prev => !prev)
    }

    return (
        <div className='single-product'>
            <div className="img">
                <img src={item?.image} alt={item?.name} />
                {
                    show
                        ?   <button onClick={() => handleRemove(item?.id)} >-</button>
                        :   <button onClick={() => handleAdd(item)}>+</button>
                }
            </div>
            <div className="info">
                <span>$ {item?.price}</span>
                <span>{item?.name} </span>
                <span>{item?.other}</span>
            </div>
        </div>
    )
}

export default SingleProduct
