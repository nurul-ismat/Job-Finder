import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';

const Review = ({reviews}) => {
    const {name, img, review, rating} = reviews
    return (
        <div className="py-8 px-8 mt-12 flex-col justify-center items w-4/5 md:w-1/3 mx-auto rounded-md">
            <img className=" mx-auto h-16 w-16 rounded-full -mt-16 " src={img || 'https://api.lorem.space/image/face?hash=92310'} alt="Customer" />
            <div className="text-center">
                <div>
                    <h6 className="text-lg text-black font-semibold mt-2">
                       {name}
                    </h6>
                    <div className='my-2'>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<BsStarFill></BsStarFill>}
                            fullSymbol={<BsStarFill style={{ color: '#facc15' }} />}
                            readonly
                        ></Rating>
                    </div>
                    <p className="font-medium ">
                        {review}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;