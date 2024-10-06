import React, { useState, useContext, useEffect } from 'react';

import SectionTitle from '../../Typography/SectionTitle';
import BillingForm from '../../Forms/BillingForm';
import { PricingCardSale } from '../../Cards/PricingCardCheckout';
import { SnackbarContext } from '../../../context/SnackbarContext';
import { StripeContext } from '../../../context/StripeContext';
import { stripeService } from '../../../services';
import { HelperText } from '@windmill/react-ui';
import { useTranslation } from 'react-i18next';
import { useStripe } from '@stripe/react-stripe-js';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../assets/config/config';
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { dictionary } from '../../../resources/multiLanguages';
import 'react-tabs/style/react-tabs.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Products({ products, listData, enabled, PricingCardCallback, pages, subscriptionPeriod }) {

  let listingType;
  if (listData.listingType === 'For Rent') {
    listingType = 'rent';
  } else {
    listingType = 'sale';
  }


  console.log("--------------------------------------");
  console.log("Submit>Products> products: ", products);
  return (
    <div className={`grid gap-2 lg:gap-3 xl:gap-4 mb-4 grid-cols-1 xl:grid-cols-3`}>
      {products &&
        products.map(function (product, i) {
          if (listingType !== product.listingType) {
            return null;
          }

          if (product.subscriptionType !== subscriptionPeriod) return null;
          console.log(listingType)
          console.log(product.subscriptionType)

          return (
            <PricingCardSale
              packageId={product._id}
              key={i}
              title={product.packageName}
              type={product.subscriptionType}
              paypalId={product.paypalId}
              stripeId={product.stripeId}
              value={product.price + ' ' + '€'}
              enabled={enabled}
              listData={listData}
              // uniqId={uniqId}
              callback={PricingCardCallback}
            />
          );
        })}
    </div>
  );
}


const ProductsSection = ({
  pages,
  listData,
  uniqId,
  enabled,
  PricingCardCallback,
}) => {
  const { products } = useContext(StripeContext);

  console.log("Products", products)
  const languageReducer = "de";
  return (
    <div>


      <Tabs className="w-full mb-12">

        <TabList className="flex justify-center gap-0 mb-16">
          <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
            {dictionary["prices"][languageReducer]["month1"]}
          </Tab>
          <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
            {dictionary["prices"][languageReducer]["month2"]}
          </Tab>
          <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg text-sm font-normal">
            {dictionary["prices"][languageReducer]["month3"]}
          </Tab>
        </TabList>

        <TabPanel>
          <Products
            products={products}
            subscriptionPeriod="one-month"
            pages={pages}
            listData={listData}
            uniqId={listData.uniqId}
            enabled={enabled}
            PricingCardCallback={PricingCardCallback}
          />
        </TabPanel>
        <TabPanel>
          <Products
            products={products}
            subscriptionPeriod="two-months"
            pages={pages}
            listData={listData}
            uniqId={listData.uniqId}
            enabled={enabled}
            PricingCardCallback={PricingCardCallback}
          />
        </TabPanel>
        <TabPanel>
          <Products
            products={products}
            subscriptionPeriod="three-months"
            pages={pages}
            listData={listData}
            uniqId={listData.uniqId}
            enabled={enabled}
            PricingCardCallback={PricingCardCallback}
          />
        </TabPanel>
      </Tabs>
    </div>

  )
}

export const Submit = ({ listData, setListData, pages }) => {
  const stripe = useStripe();
  const { openSnackbar, closeSnackbar } = useContext(SnackbarContext);
  const [enabled, setEnabled] = useState(true);
  const [error, setError] = useState(null);
  const [type, setType] = useState('');
  const [value, setValue] = useState();
  const [paypalId, setPaypalId] = useState();
  const [stripeId, setStripeId] = useState();
  const history = useHistory();
  const { t } = useTranslation();


  useEffect(() => {
    if (enabled) {
      closeSnackbar();
    } else {
      openSnackbar(t('Updating subscription...'));
    }
  }, [enabled, openSnackbar, closeSnackbar]);





  const [errorMessage, setErrorMessage] = useState(false);




  const PricingCardCallback = async (packageId, listingId) => {
    try {
      const { data } = await axios.post(`${config.api.url}/payment/stripe/create-checkout-session`, {
        packageId,
        listingId,
      });


      const stripe = await stripePromise;


      const { error } = await stripe.redirectToCheckout({
        sessionId: data.data.id,
      });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  console.log("Submit > listData", listData);
  console.log("Submit > pages", pages);

  return (
    <>
      <div className='px-0  mt-4'>
        <SectionTitle>{t('Choose your plan')}</SectionTitle>

        <ProductsSection
          pages={pages}
          listData={listData}
          uniqId={listData.uniqId}
          enabled={enabled}
          PricingCardCallback={PricingCardCallback}
        />


        {error && (
          <HelperText valid={false} className='mb-8 text-sm'>
            {error}
          </HelperText>
        )}
        {errorMessage && (
          <HelperText valid={false} className='mb-8 text-sm'>
            provide Billing details
          </HelperText>
        )}
      </div>
    </>
  );
};
