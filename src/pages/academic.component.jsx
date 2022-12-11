import { Icon } from "@iconify/react"
import { useState } from "react"
import { Accordion, PageSection, SectionContent, SectionSubTitle, TitleLg, TitleMd, TitleSm, TitleXl } from "../components/custom.library"





export const AcademicExperience = () => {

    return (
        <PageSection>
            <div className="md:my-auto mt-4 w-full md:w-4/5 lg:w-4/5 transition-all duration-300">
                <TitleXl>Acadmic Experience</TitleXl>
                <br/>
                <div className="flex justify-between ">
                    <Accordion
                        className="mx-1 w-2/5 ring-blue-300 ring p-2 rounded hover:bg-gray-700 transition-all cursor-pointer hover:scale-105"
                        title={
                            <>
                                <TitleLg>Master's Degree</TitleLg>
                                <SectionSubTitle>State University at Albany, SUNY</SectionSubTitle>
                            </>
                        }
                    >
                        <SectionContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cupiditate nesciunt voluptates fugiat earum cum delectus quidem ullam laudantium provident. Neque explicabo beatae ad non doloremque, error ullam ipsum cumque.</SectionContent>
                        <div className="flex p-2 w-full overflow-x-scroll">
                            <div className="ring ring-blue-200 rounded">
                                <TitleSm>Databases</TitleSm>
                            </div>
                        </div>
                    </Accordion>
                    <div className="h-fit mx-1 w-2/5 ring-blue-300 ring p-2 rounded hover:bg-gray-700 transition-all cursor-pointer hover:scale-105">
                        <TitleLg>Bachelor's Degree</TitleLg>
                        <SectionSubTitle>State University at Albany, SUNY</SectionSubTitle>
                    </div>
                </div>
            </div>
        </PageSection>
    )
}