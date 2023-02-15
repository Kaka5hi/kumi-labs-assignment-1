import React from 'react'
import SingleTopbarCategory from '../SingleTopbarCategory/SingleTopbarCategory'
import './Topbar.css'

const Topbar = ({data, currentActive}) => {
    return (
        <div className='topbar'>
            {
                data?.map((item) => <SingleTopbarCategory
                    key={item?.product_category_name?.id}
                    currentActive={currentActive}
                    item={item?.product_category_name}
                />)
            }
        </div>
    )
}

export default Topbar
