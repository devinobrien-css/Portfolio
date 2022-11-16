


export const Input = ({className,...rest}) => {
    return (
        <input 
            className={`bg-transparent w-full ${className}`}
            {...rest}
        />
    )
}