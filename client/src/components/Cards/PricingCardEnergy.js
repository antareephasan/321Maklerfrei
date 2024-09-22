import React from "react";
import { Button, Card, CardBody } from "@windmill/react-ui";
import { CheckIcon } from "../../icons";

function Verbrauchsausweis({setCurrentPlan, my_swiper, navigation}) {
  
  return (
    <>
        <Card className="md:mt-2 md:w-1/3 w-full mt-0 mb-2">
        <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-blue-800 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              In 5 Minuten beantragt
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  Verbrauchsausweis
                </p>
                <p className="text-center font-bold text-3xl text-4xl">29€</p>
               
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    in 48h per Mail
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    günstigere Variante
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Rechtsgültig nach GEG
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    10 Jahre Gültigkeit
                  </li>
                </div>
              </ul>

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + Versand per Mail</small>
              </p>
            </div>
          </CardBody>
          <Button
            variant="contained"
            className="w-full"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => {
              setCurrentPlan('price_29')
              my_swiper.slideNext();
              navigation.next();
            }}
          >
            Chose
          </Button>
        </Card>
        
      
    </>
  );
}

function Bedarfsausweis ({setCurrentPlan, my_swiper, navigation}) {
  return (
        <Card className="md:mt-2 md:w-1/3 w-full mt-0 mb-2">
        <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-blue-800 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              In 10 Minuten beantragt
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  Bedarfsausweis
                </p>
                <p className="text-center font-bold text-3xl text-4xl">69€</p>
               
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    in 48h per Mail
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    auch unsanierte Objekte
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Rechtsgültig nach GEG
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    10 Jahre Gültigkeit
                  </li>
                </div>
              </ul>
              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + Versand per Mail</small>
              </p>
            </div>
          </CardBody>
          <Button
            variant="contained"
            className="w-full"
            color="primary"
            style={{ marginTop: "1rem" }}
            onClick={() => {
              setCurrentPlan('price_69')
              my_swiper.slideNext();
              navigation.next();
            }}
          >
            Chose
          </Button>
        </Card>
      
  );
}


export { Verbrauchsausweis, Bedarfsausweis };
