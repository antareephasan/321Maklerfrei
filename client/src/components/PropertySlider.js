// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import EastIcon from '@mui/icons-material/East';
import { Button } from '@windmill/react-ui';

import Ad1 from '../assets/img/ads1.png';
import Ad2 from '../assets/img/ads2.png';
import Ad3 from '../assets/img/ads3.png';
import Ad4 from '../assets/img/ads4.png';
import Ad5 from '../assets/img/ads5.png';
import Ad6 from '../assets/img/ads6.png';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

const PropertySlider = () => {
    const ads = [
        Ad1,
        Ad2,
        Ad3,
        Ad4,
        Ad5,
        Ad6,
    ]
    return (
        <div className='flex justify-center items-center bg-transparent left-0 right-0 mb-10 '>
            <div className='w-full md:w-11/12 lg:w-3/4 p-5 bg-white rounded-lg shadow-md'>

                <div className='w-full text-right pb-2'>
                    <Link to={"/ads"}>
                        <Button layout='link'  >Immobilien ansehen <EastIcon fontSize='small' className='ml-2' /></Button>
                    </Link>
                </div>
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
                        1030: {
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
                    {ads.map((ad, i) => (
                        <SwiperSlide key={i}>
                            <div className='flex flex-col p-5 justify-between gap-2 shadow-lg bg-gray-50 rounded-lg'>
                                <img src={ad} />
                                <h6 className='text-lg text-gray-900 font-bold'>23 apartments for sale ...</h6>
                                <p>44866 Bochum</p>

                                <div className='flex flex-row justify-between items-center'>
                                    <span className='text-xs xl:text-sm'>
                                        2 rooms | 50 m<sup>2</sup>
                                    </span>

                                    <span className='text-sm xl:text-lg'>
                                        195,6000 €
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default PropertySlider