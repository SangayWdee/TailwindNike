import {star} from "../assets/icons/index.js";

const ReviewCard = ({imgURL,rating,customerName,feedback}) => {
    return(
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt={customerName} height={120} width={120} className="rounded-full object-cover"/>
            <p className="mt-6 max-w-sm text-center info-text ">{feedback}</p>
            <div className="flex gap-2 mt-3 justify-center items-center">
                <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
                <p className="text-xl font-montserrat text-slate-gray ">({rating})</p>
            </div>
            <h3 className="mt-1 font-palanquin text-center font-bold text-3xl">{customerName}</h3>
        </div>
    )
}

export default ReviewCard