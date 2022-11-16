import { Icon } from "@iconify/react"



export const LabeledIcon = ({children,className,icon,...rest}) => {
    return (
        <p className={`transition-all cursor-pointer flex ${className}`} {...rest}>
            <Icon icon={icon} width="40" />
            <span className="my-auto pl-2 text-2xl uppercase font-lato font-light">{children}</span>
        </p>
    )
}

export const TitleXl = ({children,className}) => {
    return (
        <p className={`md:text-6xl text-5xl font-montserrat font-light text-white ${className}`}>{children}</p>
    )
}
export const TitleLg = ({children,className}) => {
    return (
        <p className={`md:text-4xl text-3xl font-montserrat font-light text-white ${className}`}>{children}</p>
    )
}

export const SectionTitle = ({children,className}) => {
    return (
        <p className={`text-white text-3xl md:text-4xl transition-all font-bebas ${className}`}>{children}</p>
    )
}

export const SectionSubTitle = ({children,className}) => {
    return (
        <p className={`text-gray-400 font-lato font-light ${className}`}>{children}</p>
    )
}

export const PageSection = ({children,className}) => {
    return (
        <div className={`flex flex-col items-center h-screen ${className}`}>
            {children}
        </div>
    )
}

export const LabeledInput = ({children,className,...rest}) => {
    return (
        <div className={`text-white font-montserrat p-2 ${className}`}>
            <label className="">{children}</label>
            <input 
                className="bg-transparent w-full ring-transparent outline-none"
                {...rest}
            />
        </div>
    )
}

export const LabeledTextArea = ({children,className,...rest}) => {
    return (
        <div className={`text-white font-montserrat p-2 ${className}`}>
            <label className="">{children}</label>
            <textarea 
                className="bg-transparent w-full ring-transparent outline-none"
                {...rest}
            />
        </div>
    )
}