// import { Button, FormControl, InputLabel, option, Select, Input } from '@mui/material';
import React, { useEffect } from 'react'
import AdCard from './AdCard';
import { useState } from 'react';
import DemoImg from '../../assets/img/image-not-found.png'
import { DesktopNavbar } from "../HeaderLanding";
import { MobileNavbar } from "../HeaderLanding";
import { Button, Input, Select } from '@windmill/react-ui';
import axios from 'axios';
import { config } from '../../assets/config/config';
import { dictionary } from '../../resources/multiLanguages';
import ThemedSuspense from '../ThemedSuspense';

const AdsContainer = () => {
    const languageReducer = "de";

    const [adType, setAdType] = useState();
    const [propertyType, setPropertyType] = useState()
    const [location, setLocation] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [price, setPrice] = useState("");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalPages, setTotalPages] = useState(1);   // Total number of pages


    const [ads, setAds] = useState([]); // State to store ads from API
    const [loading, setLoading] = useState(false); // Loading state for API requests


    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);

        return debouncedValue;
    }

    const debouncedSearch = useDebounce(search, 500);

    // Function to fetch ads based on filter criteria
    const fetchAds = async (page = 1, limit = 12) => {
        setLoading(true);
        try {
            const response = await axios.get(`${config.api.url}/userList`, {
                params: {
                    adType,       // Filters to be sent as query params
                    propertyType,
                    location,
                    postalCode,
                    price,
                    search: debouncedSearch,
                    page,
                    limit
                }
            });
            console.log(response.data.data.lists);
            // Assuming the API returns ads in the response
            setAds(response.data.data.lists);
            setTotalPages(response.data.data.totalPages);
            setCurrentPage(response.data.data.currentPage);
        } catch (error) {
            console.error('Error fetching ads:', error);
        } finally {
            setLoading(false);
        }
    };
    // Optional: Fetch all ads when component mounts for the first time
    useEffect(() => {
        fetchAds();
    }, [debouncedSearch, adType, propertyType, location, postalCode, price]); // Include dependencies to trigger API calls


    // Call fetchAds when search button is clicked or when filter inputs change
    const handleSearch = () => {
        fetchAds(currentPage); // Call API when search button is clicked
    };


    // Function to handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        fetchAds(newPage);  // Fetch ads for the new page
    };


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
                                    value={adType || ""}
                                    onChange={(event) => setAdType(event.target.value)}
                                >
                                    <option value="">Art der Anzeige</option>
                                    <option value={"sale"}>Verkauf</option>
                                    <option value={"rent"}>Vermietung</option>
                                </Select>

                                {
                                    adType === "rent" ? (
                                        <Select
                                            id='select-property-id'
                                            labelId='select-property-id-label'
                                            label="Immoilienart"
                                            value={propertyType | ""}
                                            onChange={(event) => setPropertyType(event.target.value)}
                                        >
                                            <option value={""}>Immoilienart</option>
                                            <option value={"house_rent"}>Haus</option>
                                            <option value={"flat_rent"}>Wohnung</option>
                                            <option value={"land_rent"}>Grundstuck</option>
                                        </Select>

                                    ) : (
                                        <Select
                                            id='select-property-id'
                                            labelId='select-property-id-label'
                                            label="Immoilienart"
                                            value={propertyType | ""}
                                            onChange={(event) => setPropertyType(event.target.value)}
                                        >
                                            <option value={""}>Immoilienart</option>
                                            <option value={"house_purchase"}>Haus</option>
                                            <option value={"flat_purchase"}>Wohnung</option>
                                            <option value={"land_purchase"}>Grundstuck</option>
                                        </Select>

                                    )
                                }

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
                                    placeholder={dictionary["ads"][languageReducer]["search"]}
                                    className='w-full'
                                    size='small'
                                    onChange={(event) => setSearch(event.target.value)}
                                    value={search}
                                />

                                <Button
                                    onClick={handleSearch}
                                    variant='contained'
                                >
                                    {dictionary["ads"][languageReducer]["search"]}
                                </Button>
                            </div>
                        </div>


                        {loading ? (
                            <ThemedSuspense />
                        ) : ads.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                                {
                                    ads.map((ad) => (
                                        <AdCard
                                            key={ad._id}
                                            id={ad._id}
                                            entityId={ad.entityId}
                                            title={ad.listingTitle}
                                            objectCode={ad.uniqId}
                                            postalCode={ad.zip}
                                            location={ad.location}
                                            price={ad.listingPrice}
                                            img={ad.img || DemoImg} // Fallback to demo image if no image is provided
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <p>
                                {dictionary["ads"][languageReducer]["noadsfound"]}
                            </p> // Show message when no ads are found
                        )}

                        <div className="flex justify-center mt-5">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                                className="mr-2 px-4 py-2 bg-gray-200 rounded"
                            >
                                {dictionary["ads"][languageReducer]["previous"]}
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`mx-1 px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="ml-2 px-4 py-2 bg-gray-200 rounded"
                            >
                                {dictionary["ads"][languageReducer]["next"]}
                            </button>
                        </div>


                    </div>


                </div>
            </main>

        </div>

    )
}

export default AdsContainer;