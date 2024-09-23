// import { Button, FormControl, InputLabel, option, Select, Input } from '@mui/material';
import React from 'react'
import AdCard from './AdCard';
import { useState } from 'react';
import DemoImg from '../../assets/img/evaluation.jpg'
import { DesktopNavbar } from "../HeaderLanding";
import { MobileNavbar } from "../HeaderLanding";
import { Button, Input, Select } from '@windmill/react-ui';

const AdsContainer = () => {

    const [adType, setAdType] = useState();
    const [propertyType, setPropertyType] = useState()
    const [location, setLocation] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [price, setPrice] = useState("");
    const [search, setSearch] = useState("");

    const ads = [
        {
            title: "Semi detached house is KAhl..",
            objectCode: "2143343423",
            postalCode: "12334",
            location: "Saudi, 123. Street",
            price: "51000",
            img: DemoImg
        },
        {
            title: "Semi detached house is KAhl..",
            objectCode: "2143343423",
            postalCode: "12334",
            location: "Saudi, 123. Street",
            price: "51000",
            img: DemoImg
        },
        {
            title: "Semi detached house is KAhl..",
            objectCode: "2143343423",
            postalCode: "12334",
            location: "Saudi, 123. Street",
            price: "51000",
            img: DemoImg
        },
        {
            title: "ASsds sds sd ",
            objectCode: "2143343423",
            postalCode: "12334",
            location: "Saudi, 123. Street",
            price: "51000",
            img: DemoImg
        },
    ]

    return (
        <div>
            <DesktopNavbar />
            <MobileNavbar />
            <main>
                <div className="flex justify-center items-center bg-gray-50">

                    <div className='w-full md:w-11/12 lg:w-3/4 px-5 md:px-0 flex flex-col gap-10 py-10'>



                        <h1 className='text-left text-xl md:text-2xl lg:text-3xl text-gray-900 font-bold'>
                            Immobilien
                        </h1>

                        <div className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 '>
                                    <Select
                                        id='select-ad-ic'
                                        labelId='select-ad-id-label'
                                        label="Art der Anzeige"
                                        value={adType}
                                        onChange={(event) => setAdType(event.target.value)}
                                    >
                                        <option value="">Art der Anzeige</option>
                                        <option value={20}>Verkauf</option>
                                        <option value={30}>Vermietung</option>
                                    </Select>

                                    <Select
                                        id='select-property-id'
                                        labelId='select-property-id-label'
                                        label="Immoilienart"
                                        value={propertyType}
                                        onChange={(event) => setPropertyType(event.target.value)}
                                    >
                                        <option value={20}>Immoilienart</option>
                                        <option value={20}>Haus</option>
                                        <option value={30}>Wohnung</option>
                                        <option value={30}>Grundstuck</option>
                                    </Select>


                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Ort'
                                    size='small'
                                    onChange={(event) => setLocation(event.target.value)}
                                    value={location}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Postleitzahl'
                                    size='small'
                                    onChange={(event) => setPostalCode(event.target.value)}
                                    value={postalCode}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Preis'
                                    size='small'
                                    onChange={(event) => setPrice(event.target.value)}
                                    value={price}
                                />
                            </div>
                            <div className='flex flex-row gap-2 justify-between'>
                                <Input
                                    type='text'
                                    placeholder='Search'
                                    className='w-full'
                                    size='small'
                                    onChange={(event) => setSearch(event.target.value)}
                                    value={search}
                                />

                                <Button
                                    variant='contained'
                                >
                                    Search
                                </Button>
                            </div>
                        </div>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                            {ads.map((ad) => (
                                <AdCard
                                    title={ad.title}
                                    objectCode={ad.objectCode}
                                    postalCode={ad.postalCode}
                                    location={ad.location}
                                    price={ad.price}
                                    img={ad.img}
                                />
                            ))}
                        </div>

                    </div>


                </div>
            </main>

        </div>

    )
}

export default AdsContainer;