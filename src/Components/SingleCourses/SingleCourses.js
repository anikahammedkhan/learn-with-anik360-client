import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [10, 8]
};
const SingleCourses = () => {
    const singleData = useLoaderData();
    const { id, title, description, image, price, rating, duration, enrolled } = singleData;
    return (
        <div className='px-3'>
            <div className='flex justify-around items-center'>
                <h1 className="my-12 text-4xl font-bold text-sky-500 text-center">Course Details</h1>
                <Pdf targetRef={ref} filename="checkout.pdf" options={options} x={.5} y={.5} scale={0.8}>
                    {({ toPdf }) => <button onClick={toPdf} className='btn btn-outline btn-error'>Download Preview</button>}
                </Pdf>
            </div>
            <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl mb-20 mt-5">
                <figure><img className='w-[400px]' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h1 className="card-title text-5xl font-bold">{title}</h1>
                    <p className='my-5 text-xl font-semibold'>{description}</p>
                    <p className='text-lg font-semibold'>Price: {price}$</p>
                    <p className='text-lg font-semibold'>Rating: {rating}</p>
                    <p className='text-lg font-semibold'>Duration: {duration}</p>
                    <p className='text-lg font-semibold'>Already Enroled: {enrolled} students</p>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary"><Link to='/courses'>Back To Courses Page</Link></button>
                        <button className="btn btn-info"><Link to={`../../checkout/${id}`}>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourses;