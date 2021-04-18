import React, { useEffect, useState } from 'react';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import './Testimonial.css'

const Testimonial = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://limitless-castle-39279.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review._id])
    console.log(review)

    return (
        <section className="testimonials my-5 py-5">
            <div className="container text-center">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">
                        Testimonial
                  </h5>
                    <h3>What Our Client Says</h3>
                </div>

                <div className="row card-deck mt-5">
                    {
                        review.map(testimonial => <TestimonialInfo testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;