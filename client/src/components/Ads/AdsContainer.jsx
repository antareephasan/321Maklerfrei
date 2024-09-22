import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react'
import AdCard from './AdCard';
import { useState } from 'react';
import DemoImg from '../../assets/img/evaluation.jpg'


const AdsContainer = () => {

    const [adType, setAdType] = useState();
    const [propertyType, setPropertyType] = useState()
    const [location, setLocation] = useState();
    const [postalCode, setPostalCode] = useState();
    const [price, setPrice] = useState();
    const [Search, setSearch] = useState();

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
            {/* <DesktopNavbar />
            <MobileNavbar /> */}

            <main>


                <div className="bg-gray-50">
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <div className='flex flex-col gap-5 py-10'>

                                <h1 className='text-left text-xl md:text-2xl lg:text:3xl text-gray-900 font-bold'>
                                    Immobilien
                                </h1>

                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-row gap-5 justify-between'>
                                        <FormControl className='w-full' size="small">
                                            <InputLabel id="select-ad-id-label">Art der Anzeige</InputLabel>
                                            <Select
                                                id='select-ad-ic'
                                                labelId='select-ad-id-label'
                                                label="Art der Anzeige"
                                                value={adType}
                                                onChange={(event) => setAdType(event.target.value)}
                                            >
                                                <MenuItem value=""><em>None</em></MenuItem>
                                                <MenuItem value={20}>Verkauf</MenuItem>
                                                <MenuItem value={30}>Vermietung</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl className='w-full' size="small">
                                            <InputLabel id="select-property-id-label">Immoilienart</InputLabel>

                                            <Select
                                                id='select-property-id'
                                                labelId='select-property-id-label'
                                                label="Immoilienart"
                                                value={propertyType}
                                                onChange={(event) => setPropertyType(event.target.value)}
                                            >

                                                <MenuItem value=""> <em>None</em></MenuItem>
                                                <MenuItem value={20}>Haus</MenuItem>
                                                <MenuItem value={30}>Wohnung</MenuItem>
                                                <MenuItem value={30}>Grundstuck</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <TextField
                                            className='w-full'
                                            type='text'
                                            placeholder='Ort'
                                            size='small'
                                            onChange={(event) => setLocation(event.target.value)}
                                        />
                                        <TextField
                                            className='w-full'
                                            type='text'
                                            placeholder='Postleitzahl'
                                            size='small'
                                            onChange={(event) => setPostalCode(event.target.value)}
                                        />
                                        <TextField
                                            className='w-full'
                                            type='text'
                                            placeholder='Preis'
                                            size='small'
                                            onChange={(event) => setPrice(event.target.value)}
                                        />
                                    </div>
                                    <div className='flex flex-row gap-2 justify-between'>
                                        <TextField
                                            type='text'
                                            placeholder='Search'
                                            className='w-full'
                                            size='small'
                                            onChange={(event) => setSearch(event.target.value)}
                                        />

                                        <Button
                                            variant='contained'
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>


                                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
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
                    </div>
                </div>


            </main>


        </div>
    )
}

export default AdsContainer;