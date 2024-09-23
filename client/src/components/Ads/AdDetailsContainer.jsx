import React from 'react'
import { useState } from 'react';
// import DemoImg from '../../assets/img/evaluation.jpg'
import { DesktopNavbar } from "../HeaderLanding";
import { MobileNavbar } from "../HeaderLanding";
import { LocationOn } from '@mui/icons-material';
// import { PhotoGallery } from '../PhotoGallery/PhotoGallery';
import { ReactPhotoGallery } from '../PhotoGallery/ReactPhotoGallery';
import { Badge, Button, Label } from '@windmill/react-ui';
import { Input } from '@windmill/react-ui'

const AdsContainer = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");


    return (
        <div>
            <DesktopNavbar />
            <MobileNavbar />
            <main>
                <div className="flex justify-center items-center bg-gray-50 py-10">

                    <div className='w-full md:w-11/12 lg:w-3/4 px-5 md:px-0 flex flex-col gap-10'>

                        <div className='grid grid-cols-1 xl:grid-cols-3 gap-10'>
                            <div className='xl:col-span-2 flex flex-col  items-center justify-center gap-5'>
                                <div className='flex justify-start items-center'>
                                    <ReactPhotoGallery />
                                </div>

                                {/* Head text data */}
                                <div className='flex flex-col gap-5 w-full'>

                                    <h1 className='text-left text-xl md:text-3xl lg:text:4xl text-gray-900 font-bold'>
                                        Semi-detached house in Kehl/Kittersburg
                                    </h1>


                                    <div className='flex flex-row gap-2 justify-start'>

                                        <Badge className='px-4 py-1'>Verkauf</Badge>

                                        <div className='flex flex-row justify-center items-center gap-1'>
                                            <LocationOn color='secondary' /> <span className='text-xs font-light text-gray-600'>Bad essen</span>
                                        </div>
                                    </div>
                                    <h1 className='text-left text-xl md:text-2xl lg:text-3xl text-gray-900  font-bold'>565.000 €</h1>
                                </div>
                            </div>

                            {/* Information */}
                            <div className='w-full'>
                                <h1 className='w-full text-left font-semibold text-lg md:text-xl lg:text-2xl mb-4'>Information</h1>
                                <div className='flex flex-col gap-5 items-center w-full'>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Objektnummer: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>TFMwnJdK3Ew9-2</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Stadt: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>Bad essen</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Wohnfläche: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>165</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Energieausweis: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>liegt zur Besichtigung vor</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Badezimmer: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>3</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Status: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>Verkauf</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>SStellplätze: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>2</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Postleitzahl: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>49152</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Anzahl Zimmer: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>8</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Anzahl Schlafzimmer: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>5</p>
                                    </div>
                                    <div className='flex flex-row justify-between  gap-2 items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Baujahr: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>2023</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2  items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Objektart: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>Haus</p>
                                    </div>
                                    <div className='flex flex-row justify-between gap-2 items-center w-full'>
                                        <h1 className='lg:text-md text-gray-600'>Garage: </h1>
                                        <p className='lg:text-md text-gray-900 font-semibold'>2</p>
                                    </div>
                                </div>


                            </div>
                        </div>






                        {/* Details */}
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Beschreibung</h1>

                            <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600'>
                                Suchen Sie ein großzügiges, energieeffizientes Zuhause mit einem wunderschönen Garten und modernstem Komfort? Dann ist dieses freistehende Einfamilienhaus in Lintorf genau das Richtige für Sie! Ausstattung, die begeistert: Komplettsanierung: Das Haus wurde 2021/2022 aufwendig renoviert und präsentiert sich in einem nahezu neuwertigen Zustand. Energieeffizienz: Dank PV-Anlage mit Speicher, Wallbox für E-Autos und einem wasserführenden Kamin sind Ihre Energiekosten minimal. Moderne Technik: Fußbodenheizung, Klimaanlage und eine intelligente Bewässerungsanlage sorgen für höchsten Wohnkomfort. Großzügiger Wohnraum: Auf 165 m² Wohnfläche verteilen sich 6 Zimmer, 4 Schlafzimmer und 3 moderne Bäder mit ebenerdigen Duschen. Traumhafter Garten: Der 2023 neu gestaltete Garten lädt zum Entspannen ein. Der Pool bietet an heißen Tagen eine erfrischende Abkühlung. Ideale Lage: Lintorf bietet eine hervorragende Infrastruktur mit Kita, Schulen, Geschäften des täglichen Bedarfs und einer guten Anbindung an das öffentliche Verkehrsnetz. Weitere Highlights: Ausgebauter Dachboden: Bietet zusätzlichen Stauraum oder kann individuell gestaltet werden. Einbauküche: Hochwertig ausgestattet und perfekt in die Raumgestaltung integriert. Terrasse: Ideal zum Grillen und Entspannen. Garage/Stellplatz: Sicherer Stellplatz für Ihr Fahrzeug. Für wen dieses Haus perfekt ist: Dieses Haus eignet sich ideal für Familien, die Wert auf ein modernes, energieeffizientes Zuhause in ruhiger Lage legen. Auch für Paare, die viel Platz und Komfort suchen, ist dieses Angebot interessant. Hinweis: Eine Besichtigung ist nur nach vorheriger Vereinbarung und bei gesicherter Finanzierung möglich.
                            </p>
                        </div>

                        {/* Especial features */}
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Besonderheiten der Immobilie</h1>

                            <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600'>
                                Wasserführender Kamin Bewässerungsanlage PV Anlage 15,7 kW mit 10 Kw Speicher Wallbox Klimaanlage Dachboden ausgebaut                            </p>
                        </div>

                        {/* Location of prop  */}
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Lage der Immobilie</h1>

                            <p className='text-sm md:text-base lg:text-lg font-normal text-gray-600'>
                                Ruhige Siedlung
                            </p>
                        </div>


                        {/* Interested message sent  */}
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-lg md:text-xl lg:text-2xl xl:2xl font-semibold text-gray-900'>Sie interessieren sich für diese Immobilie?</h1>

                            <div className='flex flex-col gap-3 max-w-2xl'>

                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Ort'
                                    size='small'
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Postleitzahl'
                                    size='small'
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Preis'
                                    size='small'
                                    onChange={(event) => setTelephone(event.target.value)}
                                    value={telephone}
                                />
                                <Input
                                    className='w-full'
                                    type='text'
                                    placeholder='Preis'
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

                                    <Button>
                                        Send Message
                                    </Button>
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