import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourses = () => {
    const singleData = useLoaderData();
    const { title, description, image, price, rating, duration, enrolled } = singleData;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-20">
            <figure><img className='w-[400px]' src={image} alt="Album" /></figure>
            <div className="card-body">
                <h1 className="card-title text-5xl font-bold">{title}</h1>
                <p className='my-5 text-xl font-semibold'>{description}</p>
                <p className='text-lg font-semibold'>Price: {price}$</p>
                <p className='text-lg font-semibold'>Rating: {rating}</p>
                <p className='text-lg font-semibold'>Duration: {duration}</p>
                <p className='text-lg font-semibold'>Already Enroled: {enrolled} students</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourses;