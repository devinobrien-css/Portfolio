import { Icon } from "@iconify/react";
import {  PageSection, SectionTitle, TitleXl } from "../components/custom.library";
import { OverallAd } from "./advertisement.component";
import { WebsitesAd } from "./websites.component";



const Landing = () => {
    return (
        <div>
            <PageSection>
                <div className="md:my-auto mt-4 md:flex w-full md:w-4/5 lg:w-4/5 transition-all duration-300">
                    <div className="bg-headshot h-full bg-top bg-cover bg-no-repeat rounded-xl w-8/12 max-h-72 md:max-h-full mx-auto md:mx-0 md:w-1/3"></div>
                    <div className="p-6 md:w-2/3 w-full">
                        <TitleXl className="mb-2">Devin O'Brien</TitleXl>
                        <hr/>
                        <br/>
                        <SectionTitle>Software Engineer</SectionTitle>
                        <SectionTitle>Computer Science Master's Student</SectionTitle>
                        <br/>
                        <hr/>
                        <div className="mt-4">
                            <a className="text-white flex my-1 group" href="https://github.com/devinobrien-css" target="_blank" rel="noreferrer">
                                <Icon icon={"fa-brands:github-square"} width="50" height="43" /><span className="pl-2 font-lato my-auto group-hover:underline transition-all group-hover:text-blue-300">https://github.com/devinobrien-css</span>
                            </a>
                            <a className="text-white flex my-1 group" href="https://instagram.com" target="_blank" rel="noreferrer">
                                <Icon icon={"typcn:social-instagram"} width="50" height="50"/><span className="pl-2 font-lato my-auto group-hover:underline transition-all group-hover:text-blue-300">https://instagram.com/devinobrien</span>
                            </a>
                            <a className="text-white flex my-1 group" href="https://www.linkedin.com/in/obrien-devin" target="_blank" rel="noreferrer">
                                <Icon icon={"mdi:linkedin"} width="50" height="50"/><span className="pl-2 font-lato my-auto group-hover:underline transition-all group-hover:text-blue-300">https://www.linkedin.com/in/obrien-devin</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </PageSection>

            <OverallAd/>

            <WebsitesAd />
        </div>
    )
}
export default Landing;