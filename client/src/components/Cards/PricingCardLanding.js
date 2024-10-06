import React from "react";
import { Card, CardBody } from "@windmill/react-ui";
import { CheckIcon, DeleteIcon } from "../../icons";
import PriceCard from "./PriceCard";

function PricingCardSale() {

  return (
    <>
      <div className="md:flex mx-auto block md:w-full w-8/12 gap-4 justify-center">
        
        <Card className="md:-mt-2 md:w-1/4 w-full mt-0 mb-2">
          <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-gray-600 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              Notwendige Sichtbarkeit
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  BASIC
                </p>
                <p className="text-center font-bold text-3xl text-4xl">109€</p>
                <p className="text-center font-regular text-xs mb-5">
                  pro Monat
                </p>
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex ml-0 leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    ImmoScout24
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Kleinanzeigen
                  </li>
                </div>

                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Immowelt
                </li>
                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Immonet
                </li>

                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Premium Platzierung
                </li>
              </ul>

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + immer kündbar.</small>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:-mt-6 md:w-1/4 w-full mt-0 mb-2">
          <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-blue-600 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              Unser Bestseller
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  MEDIUM
                </p>
                <p className="text-center font-bold text-3xl text-4xl">129€</p>
                <p className="text-center font-regular text-xs mb-5">
                  pro Monat
                </p>
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex ml-0 leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    ImmoScout24
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Kleinanzeigen
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Immowelt
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Immonet
                  </li>
                </div>

                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Premium Platzierung
                </li>
              </ul>

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + immer kündbar.</small>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:-mt-2 md:w-1/4 w-full mt-0 mb-2">
          <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-gray-600 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              Bis 2x mehr Anfragen
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  PREMIUM
                </p>
                <p className="text-center font-bold text-3xl text-4xl">199€</p>
                <p className="text-center font-regular text-xs mb-5">
                  pro Monat
                </p>
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex ml-0 leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    ImmoScout24
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Kleinanzeigen
                  </li>
                </div>

                <li className="flex items-center leading-tight mb-1">
                  <i className="mr-1">
                    <CheckIcon />
                  </i>{" "}
                  Immowelt
                </li>
                <li className="flex items-center leading-tight mb-1">
                  <i className="mr-1">
                    <CheckIcon />
                  </i>{" "}
                  Immonet
                </li>
                <li className="flex items-center leading-tight mb-1">
                  <i className="mr-1">
                    <CheckIcon />
                  </i>{" "}
                  Premium Platzierung
                </li>
              </ul>

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + immer kündbar.</small>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

function PricingCardRent() {

  return (
    <>
      <div className="md:flex mx-auto block md:w-full w-8/12 gap-4 justify-center bg-red-500">
        <Card className="md:-mt-2 md:w-1/4 w-full mt-0 mb-2">
          <div className="flex w-full items-center justify-end">
            <span
              className="py-4 rounded-sm bg-gray-600 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              Notwendige Sichtbarkeit
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-lg uppercase mb-1">
                  BASIC
                </p>
                <p className="text-center font-bold text-3xl lg:text-4xl">69€</p>
                <p className="text-center font-regular text-xs mb-5">
                  pro Monat
                </p>
              </div>
              {/* <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex ml-0 leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    ImmoScout24
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Kleinanzeigen
                  </li>
                </div>

                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Immowelt
                </li>
                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Immonet
                </li>

                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Premium Platzierung
                </li>
              </ul> */}

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + immer kündbar.</small>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:-mt-6 md:w-1/4 w-full mt-0 mb-2">
          <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-blue-600 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              Unser Bestseller
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  MEDIUM
                </p>
                <p className="text-center font-bold text-3xl text-4xl">79€</p>
                <p className="text-center font-regular text-xs mb-5">
                  pro Monat
                </p>
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex ml-0 leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    ImmoScout24
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Kleinanzeigen
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Immowelt
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Immonet
                  </li>
                </div>

                <li className="flex ml-0 text-gray-400 items-center leading-tight mb-1">
                  <i className="mr-1">
                    <DeleteIcon />
                  </i>{" "}
                  Premium Platzierung
                </li>
              </ul>

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + immer kündbar.</small>
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:-mt-2 md:w-1/4 w-full mt-0 mb-2">
          <div className="flex w-full items-center justify-end">
            <span
              className="py-1 rounded-sm bg-gray-600 text-center text-gray-100 text-xs w-full"
              type="success"
            >
              Bis 2x mehr Anfragen
            </span>
          </div>
          <CardBody>
            <div className="w-full py-2 justify-center flex-grow">
              <div className="block">
                <p className="text-center font-bold text-sm uppercase mb-1">
                  PREMIUM
                </p>
                <p className="text-center font-bold text-3xl text-4xl">109€</p>
                <p className="text-center font-regular text-xs mb-5">
                  pro Monat
                </p>
              </div>
              <ul className="text-sm mx-auto w-3/4 md:w-full md:ml-3 mt-4  h-12 h-auto mb-4">
                <div className="block">
                  <li className="flex ml-0 leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    ImmoScout24
                  </li>
                  <li className="flex items-center leading-tight mb-1">
                    <i className="mr-1">
                      <CheckIcon />
                    </i>{" "}
                    Kleinanzeigen
                  </li>
                </div>

                <li className="flex items-center leading-tight mb-1">
                  <i className="mr-1">
                    <CheckIcon />
                  </i>{" "}
                  Immowelt
                </li>
                <li className="flex items-center leading-tight mb-1">
                  <i className="mr-1">
                    <CheckIcon />
                  </i>{" "}
                  Immonet
                </li>
                <li className="flex items-center leading-tight mb-1">
                  <i className="mr-1">
                    <CheckIcon />
                  </i>{" "}
                  Premium Platzierung
                </li>
              </ul>

              <p className="text-xs text-gray-400 text-center mt-2">
                <small>* Inkl. 19% MwSt. + immer kündbar.</small>
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export { PricingCardSale, PricingCardRent };
