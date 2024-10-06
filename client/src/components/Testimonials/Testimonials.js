import React from "react";
import { CardBody, Avatar } from "@windmill/react-ui";
import { StarIcon } from "../../icons";

import { dictionary } from '../../resources/multiLanguages'

function ReviewCard({ customer, review }) {
  const nameParts = customer.trim().split(' ').filter(part => part !== '');

  const initials = nameParts.map(part => part[0].toUpperCase()).join('');

  return (
    <CardBody className=" p-2 shadow-md rounded-xl h-full bg-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex gap-1">
          <StarIcon className="fill-current text-yellow-300 w-5 h-5" />
          <StarIcon className="fill-current text-yellow-300 w-5 h-5" />
          <StarIcon className="fill-current text-yellow-300 w-5 h-5" />
          <StarIcon className="fill-current text-yellow-300 w-5 h-5" />
          <StarIcon className="fill-current text-yellow-300 w-5 h-5" />
        </div>
        <p className="mt-2 font-medium text-lg text-center">
          {review}
        </p>

        <p className="font-light text-sm text-gray-400 text-center">
          {customer}
          </p>
      </div>

    </CardBody>
  )
  // return (
  //   <CardBody className="m-5 p-8 shadow-md">
  //     <div className="flex">
  //       <div className="rounded-full capitalize h-6 hover:cursor-default w-6 p-5 flex items-center justify-center font-bold bg-gray-300 dark:text-blue-600 focus:shadow-outline-purple focus:outline-none mr-3">
  //         {initials}
  //       </div>
  //       <div className="ml-2">
  //         <p className="font-semibold">{customer}</p>
  //         <small className="font-light uppercase text-xs text-blue-600">
  //           {company} | {date}
  //         </small>
  //       </div>
  //     </div>
  //     <p className="mt-4 text-md font-semibold text-gray-600">
  //       {pinned}
  //     </p>
  //     <p className="mt-2 text-sm">
  //       {review}
  //     </p>
  //     <div className="mt-3 block md:flex items-end justify-between">
  //       <div className="flex">
  //         <StarIcon className="fill-current text-yellow-300 w-4 h-4" />
  //         <StarIcon className="fill-current text-yellow-300 w-4 h-4" />
  //         <StarIcon className="fill-current text-yellow-300 w-4 h-4" />
  //         <StarIcon className="fill-current text-yellow-300 w-4 h-4" />
  //         <StarIcon className="fill-current text-yellow-300 w-4 h-4" />
  //       </div>
  //       <div className="flex text-blue-600 font-medium hover:underline items-end pr-8 mt-4 md:mt-3">
  //         <a
  //           target="_blank"
  //           href="https://www.trustpilot.com/review/321maklerfrei.de"
  //         >
  //           <small>Auf Trustpilot ansehen </small>
  //         </a>
  //       </div>
  //     </div>
  //   </CardBody>
  // )
}

function Testimonials() {
  const languageReducer="de";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile1"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile1"]["message"]}
    />
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile2"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile2"]["message"]}
    />
      {/* <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile3"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile3"]["message"]}
    />
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile4"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile4"]["message"]}
    /> */}
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile5"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile5"]["message"]}
    />
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile6"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile6"]["message"]}
    />
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile7"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile7"]["message"]}
    />
      <ReviewCard
        customer={ dictionary["testimonials"][languageReducer]["tile9"]["name"]}
        review={ dictionary["testimonials"][languageReducer]["tile9"]["message"]}
    />
      

    </div>
  );
}

export { Testimonials };
