import React, { useEffect, useState } from 'react'
import PriceCard from '../Cards/PriceCard'
import { dictionary } from '../../resources/multiLanguages';

const PricingCards = ({
  type,
  time
}) => {
  const pricesDictionary = {
    verkauf: {
      monate1: {
        basic: "99",
        medium: "139",
        premium: "189",
      },
      monate2: {
        basic: "159",
        medium: "219",
        premium: "299",
      },
      monate3: {
        basic: "219",
        medium: "289",
        premium: "399",
      },
    },
    vermietung: {
      monate1: {
        basic: "49",
        medium: "59",
        premium: "89",
      },
      monate2: {
        basic: "79",
        medium: "99",
        premium: "139",
      },
      monate3: {
        basic: "109",
        medium: "119",
        premium: "189",
      },
    }
  }

  const optionsDictionary = {
    BASIC: [
      {
        label: "ImmoScout24",
        available: true
      },
      {
        label: "Ebay Kleinanzeigen",
        available: true
      },
      {
        label: "Immowelt",
        available: false
      },
      {
        label: "Immonet",
        available: false
      },
      {
        label: "Premium Platzierung",
        available: false
      }
    ],
    MEDIUM: [
      {
        label: "ImmoScout24",
        available: true
      },
      {
        label: "Ebay Kleinanzeigen",
        available: true
      },
      {
        label: "Immowelt",
        available: true
      },
      {
        label: "Immonet",
        available: true
      },
      {
        label: "Premium Platzierung",
        available: false
      }
    ],
    PREMIUM: [
      {
        label: "ImmoScout24",
        available: true
      },
      {
        label: "Ebay Kleinanzeigen",
        available: true
      },
      {
        label: "Immowelt",
        available: true
      },
      {
        label: "Immonet",
        available: true
      },
      {
        label: "Premium Platzierung",
        available: true
      }
    ]
  };

  const languageReducer = "de";

  const [basicCardPrice, setBasicCardPrice] = useState();
  const [mediumCardPrice, setMediumCardPrice] = useState();
  const [premiumCardPrice, setPremiumCardPrice] = useState();
  const [month, setMonth] = useState(time === "monate1"
    ? dictionary["prices"][languageReducer]["month1"]
    : time === "monate2"
      ? dictionary["prices"][languageReducer]["month2"]
      : dictionary["prices"][languageReducer]["month3"]
  );


  useEffect(() => {
    setBasicCardPrice(pricesDictionary[type][time].basic);
    setMediumCardPrice(pricesDictionary[type][time].medium);
    setPremiumCardPrice(pricesDictionary[type][time].premium);
  }, [type, time])

  return (
    <div className="md:flex mx-auto block md:w-full gap-4 justify-center px-5">
      <PriceCard
        packageTitle={dictionary["prices"][languageReducer]["packageTitle1"]}
        plan={dictionary["prices"][languageReducer]["mode1"]}
        price={basicCardPrice}
        month={month}
        options={optionsDictionary.BASIC}
        highlight={false}
      />
      <PriceCard
        packageTitle={dictionary["prices"][languageReducer]["packageTitle2"]}
        plan={dictionary["prices"][languageReducer]["mode2"]}
        price={mediumCardPrice}
        month={month}
        options={optionsDictionary.MEDIUM}
        highlight={true}
      />
      <PriceCard
        packageTitle={dictionary["prices"][languageReducer]["packageTitle3"]}
        plan={dictionary["prices"][languageReducer]["mode3"]}
        price={premiumCardPrice}
        month={month}
        options={optionsDictionary.PREMIUM}
        highlight={false}
      />
    </div>
  )
}

export default PricingCards