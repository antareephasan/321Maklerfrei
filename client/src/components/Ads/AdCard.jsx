import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { East } from '@mui/icons-material'

const AdCard = ({
    title,
    objectCode,
    postalCode,
    location,
    price,
    img
}) => {
    return (
        <div className='w-full flex flex-col justify-between items-center bg-white shadow-md rounded-lg gap-2 p-4'>

            <img
                className='rounded-md'
                src={img}
            />

            <h1 className='w-full text-left text-lg lg:text-xl font-bold'>
                {title}
            </h1>

            <div className='w-full flex flex-col gap-1 justify-center items-center'>
                <p className='w-full text-left text-xs md:text-sm'>
                    Object Code: {objectCode}
                </p>
                <p className='w-full text-left text-xs md:text-sm'>
                    Postal Code: {postalCode}
                </p>
                <p className='w-full text-left text-xs md:text-sm'>
                    Location: {location}
                </p>
                <p className='w-full text-left text-xs md:text-sm'>
                    Price: {price}
                </p>

            </div>
            <Link className='w-full'>
                <div className='text-lg flex flex-row justify-end items-center'>
                    <span className='mr-2 text-blue-600 font-semibold text-sm'>Details</span> <East className='text-blue-600' fontSize='2' />
                </div>
            </Link>
        </div>
    )
}

export default AdCard