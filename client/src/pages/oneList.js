import React, { useContext, useEffect, useState } from "react";
import {  Link, useHistory, useParams } from "react-router-dom";
import { Card, CardBody, Button, Input, Label, Textarea } from "@windmill/react-ui";
import lineAngleLeft from "../icons/line-angle-left.svg"
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Helmet } from "react-helmet";
import { config } from "../assets/config/config";
import axios from "axios";
import { SnackbarContext } from "../context/SnackbarContext";

const apiUrl = config.api.url;

function SectionFeaturesGrid({ children }) {
  const { openSnackbar } = useContext(SnackbarContext);
  const history = useHistory();
  let [listData, setListData ] = useState(null);
  let [noData, setNoData ] = useState(null);
  let [messageSent, setMessageSent ] = useState(false);
  let [fillFields, setFillFields ] = useState(false);
  let [username, setUserName ] = useState('');
  let [userEmail, setUserEmail ] = useState('');
  let [message, setMessage ] = useState('');
  let [userAcceptP, setUserAcceptP ] = useState(true);

  const { id } = useParams();
  
  useEffect(() => {
    axios
      .post(`${apiUrl}/v1/userList/immobilien/${id}`)
      .then((response) => {
        if(response.data.message === 'success'){
          setNoData(false);
          setListData(response.data.data)
          return
        }else{
          setNoData(true);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  function submitMessage(e) {
    e.preventDefault();
    if( !userAcceptP|| username.length === 0 || userEmail.length === 0 || message.length === 0 ){
      return setFillFields(true)
    }
    
    axios
    .post(`${apiUrl}/v1/userList/immobilien/contact`, {id, username, userEmail, message})
    .then((response) => {
      if(response.data.message === 'success'){
        openSnackbar(`Message Sent!`, 'success', 5000);
        setMessageSent(true);
        return
      }else{
        openSnackbar(`Something Went Wrong!`, 'danger', 5000);
        setMessageSent(false);
      }
    });
  }
  return (
    <section className="flex justify-center py-8 md:py-16 bg-gray-50">
      <Helmet>
        <title>{id} - 321maklerfrei</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          {listData ? listData.listingTitle : ''}
        </h1>
        {listData &&
          <div className="listingslider flex gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
            <Card className="w-full p-6">
              <CardBody className="">
                <div className="listing w-full">
                  <div className="text-left mx-auto block md:flex gap-8">
                    <div className="gallery gap-4 w-full md:w-1/4">
                      <div className="w-full mainimage">
                      <a rel="noreferrer" href={listData.images[0]} target="_blank">
                        <img className="w-full" src={listData.images.length === 0 ? '' : listData.images[0]} alt={""} />
                      </a>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        {listData.images.slice(1).map( (img, i) => (<a key={i} rel="noreferrer" href={img} target="_blank"><img className="grid" src={img} alt={""}/></a> ))}
                      </div>
                    </div>
                    <div className="block w-full md:w-1/4">
                      <p className="pb-4 text-lg">Objektnummer: {id}</p>
                      <p className="text-sm">Postleitzahl: {listData.zip}</p>
                      <p className="text-sm">Stadt: {listData.city}</p>
                      <p className="text-sm">Anzahl Zimmer: {listData.numberOfRooms}</p>
                      <p className="text-sm">Wohnfläche: {listData.livingArea}</p>
                      <p className="text-sm">Nutzfläche: {listData.usableArea}</p>
                      <p className="text-sm">Anzahl Schlafzimmer: {listData.numberOfBedrooms}</p>
                      <p className="text-sm">Energieausweis: liegt zur Besichtigung vor</p>
                      <p className="text-sm">Baujahr: {listData.yearOfBuilding}</p>
                      <p className="text-sm">Preis: {listData.price} €</p>
                    </div>
                    <div className="block w-full md:w-1/2">
                      <p className="pb-4 text-lg">Information:</p>
                      <p className="pb-4 text-sm word-break-all">
                        {listData.description}
                      </p>
                      <p className="pb-4 text-sm word-break-all">
                        {listData.features}
                      </p>
                      <p className="pb-4 text-sm word-break-all">
                        {listData.location}
                      </p>
                      <p className="pb-4 text-sm word-break-all">
                        {listData.additionalDescription}
                      </p>
                    </div>
                  </div>
                  {!messageSent &&
                    <>
                      <div className="block text-left w-full md:w-1/2 pt-12">
                        <p className="text-md">Sie interessieren sich für diese Immobilie?</p>
                        <Input
                          className="mt-2"
                          aria-label="Bad"
                          placeholder="Dein Name"
                          value={username}
                          onChange={(e)=> setUserName(e.target.value)}
                        />
                        <Input
                          className="mt-2"
                          aria-label="Bad"
                          placeholder="Deine E-Mail Adresse"
                          value={userEmail}
                          onChange={(e)=> setUserEmail(e.target.value)}
                        />
                        <Label>
                          <Textarea
                            className="mt-1"
                            rows="3"
                            placeholder="Deine Nachricht"
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                          />
                        </Label>
                        <Label className="mt-4" check>
                          <Input type="checkbox" onChange={ ()=> setUserAcceptP(!userAcceptP) } checked={userAcceptP}/>
                          <span className="ml-2">Hiermit akzeptiere ich, die <Link to="/datenschutz">Datenschutzbestimmungen</Link> gelesen zu haben und akzeptiere diese.</span>
                          { !userAcceptP && <span className="text-red-600">*</span> }
                        </Label>
                        { fillFields && <div className="text-red-600">Please Fill All Fields!</div> }
                      </div>
                      <Button className="block mt-4 float-left" onClick={submitMessage}>Nachricht senden</Button>
                    </>
                  }
                </div>
              </CardBody>
            </Card>
          </div>
        }
        {!listData && !noData && 
          <div className="h-80 text-center py-32">Loading...</div>
        }
        {noData &&
          <div className="h-80 text-center py-32">No Data...</div>
        }
        <p className="text-md md:text-lg font-bold text-gray-700">
          <button className="flex items-center" onClick={history.goBack} ><img className="w-2 mr-2" src={lineAngleLeft}/> Zurück zu Immobilien </button>
        </p>
      </div>
    </section>
  );
}

function Immobilien() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <SectionFeaturesGrid />
      <FooterLanding />
    </>
  );
}

export default Immobilien;
