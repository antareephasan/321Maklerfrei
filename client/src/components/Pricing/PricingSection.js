import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingCards from './PricingCards';
import { dictionary } from '../../resources/multiLanguages';

const PricingSection = () => {
    const languageReducer = "de";
    return (
        <div>
            <Tabs className="w-full mb-12">
                <TabList className="flex justify-center gap-0 mb-5">
                    <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                        {dictionary["prices"][languageReducer]["saleBtn"]}
                    </Tab>
                    <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg text-sm font-normal">
                        {dictionary["prices"][languageReducer]["rentalBtn"]}
                    </Tab>
                </TabList>

                <TabPanel>
                    <Tabs>
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
                            <PricingCards
                                type="verkauf"
                                time="monate1"
                            />
                        </TabPanel>
                        <TabPanel>
                            <PricingCards
                                type="verkauf"
                                time="monate2"
                            />
                        </TabPanel>
                        <TabPanel>
                            <PricingCards
                                type="verkauf"
                                time="monate3"
                            />
                        </TabPanel>
                    </Tabs>
                </TabPanel>

                <TabPanel>
                    <Tabs>
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
                            <PricingCards
                                type="vermietung"
                                time="monate1"
                            />
                        </TabPanel>
                        <TabPanel>
                            <PricingCards
                                type="vermietung"
                                time="monate2"
                            />
                        </TabPanel>
                        <TabPanel>
                            <PricingCards
                                type="vermietung"
                                time="monate3"
                            />
                        </TabPanel>
                    </Tabs>
                </TabPanel>
            </Tabs>



        </div>
    )
}

export default PricingSection;