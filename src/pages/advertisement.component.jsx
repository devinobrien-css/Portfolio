import { Icon } from "@iconify/react";
import { useState } from "react";
import { LabeledIcon, PageSection, SectionSubTitle, SectionTitle } from "../components/custom.library";

const DevelopmentSection = () => {
    return (
        <div>
            <SectionTitle>Better tools, Better practice, Better Performance.</SectionTitle>
            <SectionSubTitle>Building enterprise-level software requires knowledge of the latest, top-of-the-line tools available...</SectionSubTitle>
            <div className="flex mt-4">
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"vscode-icons:file-type-reactjs"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:svelte-icon"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:vue"} width="50" height="50"/>
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:angular-icon"} width="50" height="50"/>
                </div>
            </div>
        </div>
    )
}

const DataSection = () => {
    //SQL? NoSQL? Somewhere in-between? 
    return (
        <div>
            <SectionTitle>Years of experience across various data stores</SectionTitle>
            <SectionSubTitle>Successfully selecting a datastore and optimizing its speed and cost is essential to proper management of an application...</SectionSubTitle>
            <div className="flex mt-4">
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:postgresql"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:mysql"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:graphql"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto text-white">
                    <Icon icon={"simple-icons:neo4j"} width="50" height="50" />
                </div>
            </div>
        </div>
    )
}

const CloudSection = () => {
    return (
        <div>
            <SectionTitle>Low code? No code? Looking to enhance your app to the cloud?</SectionTitle>
            <SectionSubTitle>With serverless development on the rise, Google, Microsoft and Amazon have stepped up as cloud providers...</SectionSubTitle>
            <div className="flex mt-4">
                <div className="bg-gray-900 rounded p-2 mx-auto text-white">
                    <Icon icon={"logos:aws"} width="50" height="50" className="text-white bg-white border-white rounded p-1" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:google-cloud"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"logos:microsoft-icon"} width="50" height="50" />
                </div>
            </div>
        </div>
    )
}
const AnalysisSection = () => {
    return (
        <div>
            <SectionTitle>Track, analyze and assess issues before they occur</SectionTitle>
            <SectionSubTitle>Continuous integration and development calls for carefully curated unit and end to end test suites...</SectionSubTitle>
            <div className="flex mt-4">
                <div className="bg-gray-900 rounded p-2 mx-auto">
                    <Icon icon={"vscode-icons:file-type-jest"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto text-white">
                    <Icon icon={"logos:github-octocat"} width="50" height="50" />
                </div>
                <div className="bg-gray-900 rounded p-2 mx-auto text-white">
                    <Icon icon={"mdi:microsoft-dot-net"} width="50" height="50" />
                </div>
            </div>
        </div>
    )
}

const tabData = [
    {
        name:"app development",
        button:"software experience",
        icon:"ion:code-slash-outline",
        description:DevelopmentSection
    },
    {
        name:"data management",
        button:"storage experience",
        icon:"carbon:datastore",
        description:DataSection
    },
    {
        name:"cloud integration",
        button:"serverless experience",
        icon:"carbon:cloud-data-ops",
        description:CloudSection
    },
    {
        name:"performance analysis",
        button:"statistics experience",
        icon:"carbon:chart-line-data",
        description:AnalysisSection
    }
]

export const OverallAd = () => {
    const [currentTab,setTab] = useState(tabData[0].name)

    const Section = tabData.filter(tab => {return tab.name === currentTab})[0].description

    return (
        <PageSection>
            <div className="md:my-auto md:w-9/12 ">
                <div className="md:flex">
                    <div className="md:w-5/12 [&>*]:my-2 w-11/12 mx-auto md:mx-0">
                        {tabData.map((tab,index) => {
                            return (
                                <LabeledIcon
                                    key={`tab-${tab.name}-${index}`}
                                    className={`rounded p-3 ${(tab.name === currentTab?"outline-none ring ring-blue-300 text-white":"text-gray-500")}`}
                                    icon={tab.icon}
                                    onClick={() => setTab(tab.name)}
                                >{tab.name}</LabeledIcon>
                            )
                        })}
                    </div>
                    <div className="md:w-1/2 pl-8">
                        <Section />
                        <button className="my-4 block mx-auto ring ring-gray-400 text-gray-400 scale-95 transform hover:scale-100 transition-all rounded px-4 py-2 outline-none">{tabData.filter(tab => {return tab.name === currentTab})[0].button}</button>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}