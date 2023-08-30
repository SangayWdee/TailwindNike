const Buttons = ({label, iconURl, alt, backgroundColor, textColor, borderColor, fullWidth}) => {
    return(
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border 
            font-montserrat text-lg rounded-full leading-none
            ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'bg-coral-red  text-white'}
            ${fullWidth && 'w-full'}`}>
            {label}
            {iconURl && <img src={iconURl} className="rounded-full ml-2 w-5 h-5" alt={alt}/>}
        </button>
    )
}

export default Buttons