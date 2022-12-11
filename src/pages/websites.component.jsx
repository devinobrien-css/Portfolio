import { PageSection, TitleXl } from "../components/custom.library"



const websites = [
    {
        name:"Neuroexed",
        link:"https://www.neuroexed.com",
        img:"bg-neuro"
    },
    {
        name:"Example Portfolio",
        link:"https://devinobrien-css.github.io",
        img:"bg-landing"
    },
    {
        name:"Sympathetic Intelligence",
        link:"",
        img:"bg-landing"
    }
]



export const WebsitesAd = () => {


    return (
        <PageSection>
            <div className="md:my-auto mt-4 w-full md:w-4/5 lg:w-4/5 transition-all duration-300">
                <TitleXl>Some of my live work</TitleXl>

                <div className="mt-8 flex flex-wrap [&>*]:mx-auto [&>*]:my-3 p-2">
                    {websites.map((website,index) => {

                        return (
                            <a key={`website-${index}`} className={`hover:scale-105 duration-800 transition-all bg-gray-900 block w-min rounded-lg overflow-hidden`} href={website.link} target="_blank" rel="noreferrer">
                                <div className={`${website.img} bg-cover bg-no-repeat w-96 h-48`}></div>
                                <p className="text-white font-lato font-light text-3xl p-2">
                                    {website.name}
                                </p>
                            </a>
                        )
                    })}
                </div>
            </div>
        </PageSection>
    )
}