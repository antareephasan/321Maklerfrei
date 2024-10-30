import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
// import DemoImg from '../../assets/img/evaluation.jpg'
import { DesktopNavbar } from "../HeaderLanding";
import { MobileNavbar } from "../HeaderLanding";
import { LocationOn } from '@mui/icons-material';
// import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ReactPhotoGallery } from '../PhotoGallery/ReactPhotoGallery';
import { Badge, Button, Label } from '@windmill/react-ui';
import { Input } from '@windmill/react-ui'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../assets/config/config';
import { flowFactService } from '../../services';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';
import ThemedSuspense from '../ThemedSuspense';

const AdsContainer = () => {
    const { id } = useParams();

    const { user } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");

    const [adDetails, setAdDetails] = useState(null);

    const [imagesList, setImagesList] = useState([]);
    const [loading, setLoaing] = useState(true);


    const handleSendMessage = async () => {
        try {
            const response = await axios.post(`${config.api.url}/message`, {
                name,
                email,
                telephone,
                message,
                uniqId: adDetails.uniqId
            })

            toast.success("Message sent");
            setName("");
            setEmail("");
            setTelephone("");
            setMessage("");
        } catch (error) {
            toast.error("Failed to send message");
            console.log(error)
        }
    }


    const fetchImages = () => {
        flowFactService.generateCognitoToken().then((cognitoToken) => {
            axios
                .get(
                    `https://api.production.cloudios.flowfact-prod.cloud/multimedia-service/items/entities/${adDetails.entityId}`,
                    {
                        headers: {
                            cognitoToken,
                        },
                    }
                )
                .then((reqData) => {
                    if (reqData?.data.length < 1) return;

                    const images = reqData.data.map((img) => ({
                        original: img.fileReference,        // Assuming imagesList has 'url' field for the original image
                    }));
                    console.log(images)
                    setImagesList(images);
                }).finally(() => {
                    setLoaing(false)
                });
        });
    }

    useEffect(() => {
        if (adDetails?.entityId) {
            fetchImages()
        }
    }, [adDetails])

    const fillUserData = () => {
        console.log(user)
        if (user) {
            setName(`${user.name} ${user.lastname}`)
            setEmail(user.email)
            setTelephone(user.phone_number)
        }
    }
    useEffect(() => {
        // Fetch the ad details from your API based on the ID from the URL
        const fetchAdDetails = async () => {
            try {
                const response = await axios.get(`${config.api.url}/userList/details/${id}`); // Replace with your API endpoint
                console.log(response.data.data);
                setAdDetails(response.data.data);
            } catch (error) {
                console.log("Failed to fetch ad details", error);
            }
        };

        fetchAdDetails();
        fillUserData();

    }, [id]);

    if (!adDetails) {
        return <ThemedSuspense />;
    }

    console.log(id);
    return (
        <div>
            <DesktopNavbar />
            <MobileNavbar />
            <main>
                <div className="flex justify-center items-center bg-gray-50 py-10">

                    <div className='w-full md:w-11/12 lg:w-3/4 px-5 md:px-0 flex flex-col gap-10'>

                        <div className='flex flex-col  items-center gap-5'>
                            {/* Head text data */}
                            <div className='flex flex-col gap-5 w-full'>

                                <h1 className='text-left text-xl md:text-3xl lg:text:4xl text-gray-900 font-bold'>
                                    {adDetails.listingTitle}
                                </h1>


                                <div className='flex flex-row gap-2 justify-start'>

                                    <Badge className='px-4 py-1'>{adDetails.listingType}</Badge>

                                    <div className='flex flex-row justify-center items-center gap-1'>
                                        <LocationOn color='secondary' /> <span className='text-xs font-light text-gray-600'>{adDetails.city}</span>
                                    </div>
                                </div>
                                <h1 className='text-left text-xl md:text-2xl lg:text-3xl text-gray-900  font-bold'>{adDetails.listingPrice} €</h1>
                            </div>

                            {
                                loading ? (
                                    <ThemedSuspense />
                                ) : 
                                    imagesList.length !== 0  ? (
                                        <ReactPhotoGallery images = { imagesList } />
                                    ) : (
                                        null
                                    )
                                
                            }


                        </div>
                        <div className='w-full'>

                            {/* Information */}
                            <h1 className='w-full text-left font-semibold text-lg md:text-xl lg:text-2xl mb-4'>Information</h1>
                            {/* <div className='flex flex-col gap-5 items-center w-full'> */}
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-6'>
                                <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Objektnummer: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.uniqId}</p>
                                </div>
                                {adDetails?.city && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Stadt: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.city}</p>
                                </div>)}
                                {adDetails?.livingArea && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Wohnfläche: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'> {adDetails?.livingArea}</p>
                                </div>)}
                                {adDetails?.energy && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Energieausweis: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.energy ? "available" : "not availabe"}</p>
                                </div>)}
                                {adDetails?.numberOfBathrooms && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Badezimmer: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.numberOfBathrooms}</p>
                                </div>)}
                                {adDetails?.listingType && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Status: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.listingType}</p>
                                </div>)}
                                {adDetails?.numberOfParkingSpaces && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>SStellplätze: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.numberOfParkingSpaces}</p>
                                </div>)}
                                {adDetails.zip && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Postleitzahl: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.zip}</p>
                                </div>)}
                                {adDetails?.numberOfRooms && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Anzahl Zimmer: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.numberOfRooms}</p>
                                </div>)}
                                {adDetails?.numberOfBedrooms && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Anzahl Schlafzimmer: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.numberOfBedrooms}</p>
                                </div>)}
                                {adDetails?.yearOfBuilding && (<div className='flex flex-row justify-between  gap-2 items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Baujahr: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.yearOfBuilding}</p>
                                </div>)}
                                {adDetails?.buildingType && (<div className='flex flex-row justify-between gap-2  items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Objektart: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.buildingType}</p>
                                </div>)}
                                {adDetails?.numberOfGarages && (<div className='flex flex-row justify-between gap-2 items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Garage: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.numberOfGarages}</p>
                                </div>)}
                                {adDetails?.monthlyHousepayment && (<div className='flex flex-row justify-between gap-2 items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>House fee: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.monthlyHousepayment}</p>
                                </div>)}
                                {adDetails?.numberOfFloors && (<div className='flex flex-row justify-between gap-2 items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Floors: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.numberOfFloors}</p>
                                </div>)}
                                {adDetails?.usableArea && (<div className='flex flex-row justify-between gap-2 items-center w-full'>
                                    <h1 className='lg:text-md text-gray-600'>Usable area: </h1>
                                    <p className='lg:text-md text-gray-900 font-semibold'>{adDetails.usableArea}</p>
                                </div>)}
                            </div>
                        </div>






                        {/* Details */}
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Beschreibung</h1>

                            <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600'>
                                {adDetails.description}
                            </p>
                        </div>

                        {/* Especial features */}
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Besonderheiten der Immobilie</h1>

                            <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600'>
                                {adDetails.features}
                            </p>
                        </div>

                        {/* Location of prop  */}
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Lage der Immobilie</h1>

                            <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600'>
                                {
                                    adDetails.location
                                }
                            </p>
                        </div>


                        {/* Interested message sent  */}
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Sie interessieren sich für diese Immobilie?</h1>

                            <div className='flex flex-col gap-3 max-w-2xl'>

                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Your name'
                                    size='small'
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Your email address'
                                    size='small'
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Your telephone number'
                                    size='small'
                                    onChange={(event) => setTelephone(event.target.value)}
                                    value={telephone}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Your message...'
                                    size='small'
                                    onChange={(event) => setMessage(event.target.value)}
                                    value={message}
                                />

                                <div className='flex flex-row justify-start items-center'>
                                    <Label check>
                                        <Input type="checkbox" />
                                        <span className="ml-2">I hereby confirm that I have read the General Terms and Conditions / Cancellation Policy and accept them.</span>
                                    </Label>

                                </div>

                                <div className='mt-2'>

                                    <Button onClick={handleSendMessage}>
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </main >

        </div >
    )
}

export default AdsContainer;