import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { East } from '@mui/icons-material'
import { flowFactService } from '../../services'
import axios from 'axios';

const AdCard = ({
    id,
    title,
    entityId,
    objectCode,
    postalCode,
    location,
    price,
    img
}) => {
    const [imagesList, setImagesList] = useState([]);
    useEffect(() => {
        flowFactService.generateCognitoToken().then((cognitoToken) => {
            axios
                .get(
                    `https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/entities/${entityId}`,
                    {
                        headers: {
                            cognitoToken,
                        },
                    }
                )
                .then((reqData) => {
                    setImagesList(reqData.data);
                });
        });
    }, [entityId]);

    return (
        <div className='w-full flex flex-col justify-between items-center bg-white shadow-md rounded-lg gap-2 transform transition-transform duration-300  hover:shadow-lg hover:bg-gray-50 mb-2'>
            <Link to={`/ads/${id}`} className='w-full'>
                <div className="w-full h-48 bg-gray-100 flex justify-center items-center rounded-t-md overflow-hidden">
                    <img
                        src={imagesList[0]?.fileReference || img}
                        alt="Ad Image"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>

                <div className='px-4 w-full py-4'>
                    <h1 className='w-full text-left text-lg lg:text-xl font-semibold'>
                        {title}
                    </h1>

                    <div className='w-full flex flex-col gap-1 justify-center items-center mt-1'>
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
                            Price: {price}&#8364;
                        </p>

                    </div>

                    {/* <div className='text-lg flex flex-row justify-end items-center'>
                        <span className='mr-2 text-blue-600 font-semibold text-sm'>Details</span> <East className='text-blue-600' fontSize='2' />
                    </div> */}
                </div>
            </Link>
        </div>
    )
}

export default AdCard