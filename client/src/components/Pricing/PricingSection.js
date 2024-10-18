import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingCards from './PricingCards';
import { dictionary } from '../../resources/multiLanguages';

const PricingSection = () => {
    const listingTypes = ["rent", "sale"];
    const subscriptionDurations = [1, 2, 3];
    const languageReducer = "de";

    const subscriptionKeys = {
        1: "month1",
        2: "month2",
        3: "month3",
        4: "month4",
        5: "month5",
        6: "month6",
        7: "month7",
        8: "month8",
        9: "month9",
        10: "month10",
        11: "month11",
        12: "month12"
    };

    return (
        <div>
            <Tabs className="w-full mb-12">
                <TabList className="flex justify-center gap-0 mb-5">
                    {
                        listingTypes.map((listingType) => (
                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                                {listingType}
                            </Tab>
                        ))
                    }
                </TabList>

                {
                    listingTypes.map((listingType) => (
                        <TabPanel>
                            <Tabs>
                                <TabList className="flex justify-center gap-0 mb-16">
                                    {
                                        subscriptionDurations.map((subscriptionDuration) => (
                                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                                                {dictionary["prices"][languageReducer][subscriptionKeys[subscriptionDuration]]}
                                            </Tab>
                                        ))
                                    }
                                </TabList>
                                {
                                    subscriptionDurations.map((subscriptionDuration) => (
                                        <TabPanel>
                                            <PricingCards
                                                listingType={listingType}
                                                subscriptionDuration={subscriptionDuration}
                                            />
                                        </TabPanel>

                                    ))
                                }
                            </Tabs>
                        </TabPanel>
                    ))
                }
            </Tabs>



        </div>
    )
}

export default PricingSection;