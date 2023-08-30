import ReviewCard from "../components/ReviewCard.jsx";
import {reviews} from "../constants/index.js";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-4xl text-center font-bold">
                What Our <span className="text-coral-red">Customers</span> Say?
            </h3>
            <p className="text-center info-text m-auto mt-4 max-w-lg ">Hear genuine stories from our satisfied
                customers about their exceptional experiences with us.</p>
            <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">
                {reviews.map((review)=>(
                    <ReviewCard
                        key={review.customerName}
                        customerName={review.customerName}
                        imgURL={review.imgURL}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews