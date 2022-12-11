import { Icon } from "@iconify/react"
import { Accordion, PageSection, SectionContent, SectionSubTitle, TitleLg, TitleMd, TitleXl } from "../components/custom.library"


export const WorkExperience = () => {

    return (
        <PageSection>
            <div className="md:my-auto mt-4 w-full md:w-4/5 lg:w-4/5 transition-all duration-300">
                <TitleXl>Past work experience</TitleXl>
                <br/>
                <div className="flex flex-wrap justify-between">

                
                    <Accordion
                        className="mx-auto my-4 w-2/5 ring-blue-300 ring p-2 rounded hover:bg-gray-700 transition-all cursor-pointer hover:scale-105"
                        title={
                            <>
                                <TitleLg>NeuroExed</TitleLg>
                                <SectionSubTitle>Develop and manage the Center for Neuroscience and Experiantal Education's web presence</SectionSubTitle>
                            </>
                        }
                    >
                        <SectionContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cupiditate nesciunt voluptates fugiat earum cum delectus quidem ullam laudantium provident. Neque explicabo beatae ad non doloremque, error ullam ipsum cumque.</SectionContent>

                        <TitleMd>Skills Used:</TitleMd>
                        <div className="flex">
                            <div className="bg-gray-900 rounded p-2 mx-auto">
                                <Icon icon={"logos:react"} width="50" height="50" />
                            </div>
                            <div className="bg-gray-900 rounded p-2 mx-auto">
                                <Icon icon={"logos:aws"} width="50" height="50" />
                            </div>
                            <div className="bg-gray-900 rounded p-2 mx-auto">
                                <Icon icon={"logos:tailwindcss-icon"} width="50" height="50" />
                            </div>
                        </div>
                    </Accordion>
                    <Accordion
                        className="mx-auto my-4 w-2/5 ring-blue-300 ring p-2 rounded hover:bg-gray-700 transition-all cursor-pointer hover:scale-105"
                        title={
                            <>
                                <TitleLg>Tekniverse</TitleLg>
                                <SectionSubTitle>Constructed self-generating unit tests for a suite of applications</SectionSubTitle>
                            </>
                        }
                    >
                        <SectionContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cupiditate nesciunt voluptates fugiat earum cum delectus quidem ullam laudantium provident. Neque explicabo beatae ad non doloremque, error ullam ipsum cumque.</SectionContent>
                    </Accordion>
                    

                    <Accordion
                        className="mx-auto my-4 w-2/5 ring-blue-300 ring p-2 rounded hover:bg-gray-700 transition-all cursor-pointer hover:scale-105"
                        title={
                            <>
                                <TitleLg>Content Critical Solutions</TitleLg>
                                <SectionSubTitle>Built a GUI to track their manufactoring floor's processing simplifying factory operation</SectionSubTitle>
                            </>
                        }
                    >
                        <SectionContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cupiditate nesciunt voluptates fugiat earum cum delectus quidem ullam laudantium provident. Neque explicabo beatae ad non doloremque, error ullam ipsum cumque.</SectionContent>
                        <TitleMd className="mt-2">Skills Used:</TitleMd>
                        <div className="flex">
                            <div className="bg-gray-900 rounded p-2 mx-auto">
                                <Icon icon={"vscode-icons:file-type-php"} width="50" height="50" />
                            </div>
                            <div className="bg-gray-900 rounded p-2 mx-auto">
                                <Icon icon={"logos:python"} width="50" height="50" />
                            </div>
                            <div className="bg-gray-900 rounded p-2 mx-auto">
                                <Icon icon={"logos:mysql"} width="50" height="50" />
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </PageSection>
    )
}