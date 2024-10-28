// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import EastIcon from '@mui/icons-material/East';
import { Button } from '@windmill/react-ui';
import axios from "axios";



import DemoImg from '../assets/img/image-not-found.png'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
// import { config } from '../assets/config/config';
import AdCard from './Ads/AdCard';
import { FlowFactContext } from '../context/FlowFactContext';

SwiperCore.use([Autoplay]);

const PropertySlider = () => {

    const {recentImmobilien} = useContext(FlowFactContext);

    // const [latestAds, setLatestAds] = useState([]);

    // const fetchLatestAds = async () => {
    //     try {
    //         const response = await axios.get(`${config.api.url}/userList/latest`);
    //         console.log(response.data);
    //         setLatestAds(response.data.data);

    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    // useEffect(() => {
    //     fetchLatestAds();
    // }, []);


    return (
        <div className='flex justify-center items-center bg-transparent left-0 right-0 mb-10'>
            <div className='w-full md:w-11/12 lg:w-3/4 py-8 px-5 bg-white md:rounded-lg md:shadow-md'>

                <div className='w-full flex flex-row justify-between text-center items-center pb-6'>
                    <h2 className='text-base md:text-base lg:text-xl xl:text-2xl font-semibold'>
                        Aktuelle Immobilienangebote
                    </h2>
                    <Link to={"/ads"}>
                        <Button layout='link'>
                            <span className='mr-2 hidden sm:flex text-blue-600'>Immobilien ansehen</span> <EastIcon className="text-blue-600" fontSize='inherit' />
                        </Button>
                    </Link>
                </div>

                {recentImmobilien?.length === 0 ? (
                    <p>No recent ads found</p>
                ) : (
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1530: {
                                slidesPerView: 4
                            },
                            780: {
                                // width: 576,
                                slidesPerView: 3,
                            },
                            500: {
                                // width: 768,
                                slidesPerView: 2,
                            },

                            50: {
                                // width: 768,
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {recentImmobilien.map((ad, i) => (
                            <SwiperSlide key={i}>
                                <AdCard
                                    entityId={ad.entityId}
                                    id={ad._id}
                                    location={ad.city}
                                    postalCode={ad.zip}
                                    price={ad.listingPrice}
                                    title={ad.listingTitle}
                                    objectCode={ad.uniqId}
                                    img={DemoImg}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
}

export default PropertySlider