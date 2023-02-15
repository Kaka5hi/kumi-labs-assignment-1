import React from 'react'
import SingleCategory from '../SingleCategory/SingleCategory'
import './Sidebar.css'


const Sidebar = ({currentActive , data}) => {

    return (
        <div className='sidebar'>
            {
                data?.map((item) => <SingleCategory
                    key={item?.product_category_name?.id}
                    currentActive={currentActive}
                    item={item?.product_category_name}
                />)
            }
        </div>
    )
}

export default Sidebar
