import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingCards from './PricingCards';

const PricingSection = () => {
    return (
        <div>
            <Tabs className="w-full mb-12">
                <TabList className="flex justify-center gap-0 mb-5">
                    <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                        Verkauf
                    </Tab>
                    <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg text-sm font-normal">
                        Vermietung
                    </Tab>
                </TabList>

                <TabPanel>
                    <Tabs>
                        <TabList className="flex justify-center gap-0 mb-16">
                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                                1 month
                            </Tab>
                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                                2 month
                            </Tab>
                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg text-sm font-normal">
                                3 months
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
                                1 month
                            </Tab>
                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-5 py-2 rounded-l-lg text-sm font-normal">
                                2 month
                            </Tab>
                            <Tab className="cursor-pointer bg-gray-100 text-gray-700 px-4 py-2 rounded-r-lg text-sm font-normal">
                                3 months
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