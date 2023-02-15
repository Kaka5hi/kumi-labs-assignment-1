import React from 'react'
import './SingleTopbarCategory.css'
import { FaCarrot, FaEgg } from 'react-icons/fa'
import { GiWrappedSweet, GiCannedFish } from 'react-icons/gi'
import { MdCake } from 'react-icons/md'
import {IoFastFood} from 'react-icons/io5'

const SingleTopbarCategory = ({ item, currentActive }) => {
    const getIcon = (categoryName) => {
        if (categoryName === 'produce') {
            return <FaCarrot />
        } else if (categoryName === 'prepared foods') {
            return <GiWrappedSweet />
        } else if (categoryName === 'canned foods & soups') {
            return <GiCannedFish />
        } else if (categoryName === 'bakery') {
            return <MdCake />
        } else if (categoryName === 'dairy & eggs') {
            return <FaEgg />
        } else {
            return <IoFastFood />
        }
    }

    return (
        <div className={`single-topbar-category ${(item?.id === currentActive) ?  'active' : ''}`}>
            {getIcon(item?.category)}
            <span>{item?.category}</span>
        </div>
    )
}

export default SingleTopbarCategory
