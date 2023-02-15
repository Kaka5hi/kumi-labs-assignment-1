import React from 'react'

const SingleCategory = ({item, currentActive }) => {
    
    return (
        <span className={`category-list ${(item?.id === currentActive) ?  'active' : ''}`}>
            {item?.category}
        </span>
    )
}

export default SingleCategory
