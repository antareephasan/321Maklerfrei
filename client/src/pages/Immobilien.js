import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Card, CardBody, Button, Input, Select } from "@windmill/react-ui";
import image from "../assets/img/no-image.png";
import { DesktopNavbar } from "../components/HeaderLanding";
import { MobileNavbar } from "../components/HeaderLanding";
import { FooterLanding } from "../components/FooterLanding";
import { Helmet } from "react-helmet";
import { FlowFactContext } from "../context/FlowFactContext";
import axios from "axios";
import { useForm } from "react-hooks-helper";
import { config } from "../assets/config/config";
const apiUrl = config.api.url;
function numberWithCommas(x) {
  x = x.replace('.', '');
  var parts = x.toString().split(".");
  parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
  return parts.join(",");
  }

function SectionFeaturesGrid({ recentImmobilien, setForm, formData }) {
  const [ data, setData ] = useState(recentImmobilien);
  const [ search, setSearch ] = useState(false);
  const [ noData, setNoData ] = useState(false);
  const history = useHistory();
  const { page } = useParams();
  useEffect(()=>{
    if(page < 1) {
      history.push('/immobilien/1');
      return
    }
    let filter = false;
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const element = formData[key];
        if(element) {
          filter = true;
          break;
        }
      }
    }
    if(!filter && page === 1) return setData(recentImmobilien);
    axios.post(
      `${apiUrl}/v1/userList/immobilien`, {...formData, page}
    ).then( reqData => {
      setSearch(false);
      if(reqData.data.filterImmobilien && reqData.data.filterImmobilien.length !== 0){
        setNoData(false)
        setData(reqData.data.filterImmobilien);
      }else{
        setNoData(true)
      }
    });
  },[recentImmobilien, page]);

  async function filterData(e) {
    e.preventDefault();
    setSearch(true)
    try{
      for (const key in formData) {
        if (Object.hasOwnProperty.call(formData, key)) {
          const element = formData[key];
          localStorage.setItem(key, element);
        }
      }
      let reqData = await axios.post(
        `${apiUrl}/v1/userList/immobilien`,{...formData, page}
      );
      if(reqData.data.filterImmobilien && reqData.data.filterImmobilien.length !== 0){
        setNoData(false)
        setData(reqData.data.filterImmobilien);
      }else{
        setNoData(true)
      }
    }catch(er){
      setData(recentImmobilien);
    }
    setSearch(false)
  }
  return (
    <section className="flex justify-center py-8 md:py-16 bg-gray-50">
      <Helmet>
        <title>Immobilien - 321maklerfrei</title>
      </Helmet>
      <div className="text-left w-11/12 lg:w-3/4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700">
          Immobilien
        </h1>
        <div className="filter flex gap-0 md:gap-8 py-8">
          <Select className="mt-1" name="listingType" value={formData.listingType} onChange={setForm} autoComplete="off">
            <option value="">Art der Anzeige</option>
            <option value="For Sale">Verkauf</option>
            <option value="For Rent">Vermietung</option>
          </Select>
          <Select className="mt-1" name="buildingType" value={formData.buildingType} onChange={setForm} autoComplete="off">
            <option value="">Immobilienart</option>
            <option value="House">Haus</option>
            <option value="Flat">Wohnung</option>
            <option value="Land">Grundstück</option>
            <option value="Commercial">Gewerbe</option>
            <option value="Investment">Investment</option>
          </Select>
          <Input aria-label="Bad" placeholder="Ort" name="city" value={formData.city} onChange={setForm}/>
          <Input aria-label="Bad" placeholder="Postleitzahl" name="zip" value={formData.zip} onChange={setForm}/>
          <Input onKeyDown={(e)=> !/^\d+$/.test(e.key) && e.key !== 'Backspace' ? e.preventDefault() : true } aria-label="Bad" placeholder="Preis" name="maxPrice" value={numberWithCommas(formData.maxPrice)} onChange={setForm}/>
        </div>
        <div className="flex justify-center">
          <button disabled={search} className="bg-blue-600 p-2 text-white rounded-b-3xl" onClick={(e) => filterData(e)}>{search ? 'Suche...' : 'Filter'}</button>
        </div>
        {data.length !== 0 && !noData && !search &&
          <div className="listingslider flex  py-12 text-center justify-center flex-wrap">
            {data.map( (immo, i) =>
              <Card key={i} className="p-6">
                <CardBody className="">
                  <div className="listing">
                    <div className="text-left mx-auto">
                      <div style={{height: "200px", width: '350px'}}>
                      <Link to={`/immobilien/id/${immo.uniqId}`}>
                        {immo.images.length === 0 && <img className="w-full h-full object-fit: cover;" src={image} alt={immo.title}/>
                      }
                      {immo.images.length !== 0 &&
                        <img className="w-full h-full object-fit: cover;" src={immo.images[immo.images.length-1]} alt={immo.title}/>
                      }
                      </Link>
                      </div>
                      <p title={immo.title} className="py-4 text-lg">{immo.title.slice(0, 25)}...</p>
                      <p className="text-sm">Objektnummer: {immo.uniqId}</p>
                      <p className="text-sm">Postleitzahl: {immo.zip}</p>
                      <p className="text-sm">Ort: {immo.city}</p>
                      <p className="text-sm">Preis: {immo.price} €</p>
                      <p className="link pt-4 text-sm font-semibold">
                      <Link className="flex" to={`/immobilien/id/${immo.uniqId}`}>Mehr erfahren -&gt;</Link>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>
        }
        {data.length === 0 && !noData && <div className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
        Loading...
        </div>}
        {noData && <div className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
          no Data...
        </div>}
        {search && <div className="listingslider gap-4 py-12 max-w-4xl text-center justify-content-center mx-auto">
          Searching Please Wait...
        </div>}
        <div className="flex justify-between">
          <Link className={`bg-gray-200 p-2 text-gray-700 rounded ${+page === 1 ? 'opacity-0 pointer-events-none': ''} `} onClick={()=>setSearch(true)} to={`/immobilien/${+page-1}`}>{search ? 'Searching...' : 'Zurück'}</Link>
          <Link className={`bg-blue-600 p-2 text-white rounded ${noData ? 'opacity-0 pointer-events-none': ''} `} onClick={()=>setSearch(true)} to={`/immobilien/${+page+1}`}>{search ? 'Searching...' : `Weiter`}</Link>
        </div>

      </div>
    </section>
  );
}

function Immobilien() {
  const defaultData = {
    listingType: localStorage.getItem('listingType') ? localStorage.getItem('listingType'): '',
    buildingType: localStorage.getItem('buildingType') ? localStorage.getItem('buildingType'): '',
    city: localStorage.getItem('city') ? localStorage.getItem('city'): '',
    zip: localStorage.getItem('zip') ? localStorage.getItem('zip'): '',
    maxPrice: localStorage.getItem('maxPrice') ? localStorage.getItem('maxPrice'): ''
  }
  const { recentImmobilien } = useContext(FlowFactContext);
  const [formData, setForm] = useForm(defaultData);
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
      <SectionFeaturesGrid recentImmobilien={recentImmobilien} setForm={setForm} formData={formData}/>
      <FooterLanding />
    </>
  );
}

export default Immobilien;
