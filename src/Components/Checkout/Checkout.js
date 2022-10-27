import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';


const Checkout = () => {


    const checkoutToast = () => {
        toast.success('Your payment is successful!')
    }
    const checkoutData = useLoaderData();
    const { title, image, price, rating, duration, enrolled } = checkoutData;
    return (
        <div className="w-full flex flex-col p-6 space-y-4 sm:p-10">
            <h2 className="text-4xl font-bold text-center">Checkout</h2>
            <div className='mx-auto w-3/4'>
                <ul className="flex">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 w-full border-transparent rounded outline-none bg-gray-500" src={image} alt="Polaroid camera" />
                            <div className="flex flex-col justify-evenly w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{title}</h3>
                                        <p className="text-sm text-gray-400">Duration: {duration}</p>
                                        <p className="text-sm text-gray-400">Rating: {rating}</p>
                                        <p className="text-sm text-gray-400">Enrolled: {enrolled}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">{price} $</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="space-y-1 mb-5">
                    <p>Total amount:
                        <span className="font-semibold">{price} $</span>
                    </p>
                    <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center">
                    <button type="button" className="m-4 px-6 py-2 border rounded-md border-violet-400"><Link to='/courses'>Back to Course Page</Link></button>
                    <button onClick={checkoutToast} type="button" className="m-4 px-6 py-2 border rounded-md border-violet-400 bg-violet-400">
                        Complete Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;