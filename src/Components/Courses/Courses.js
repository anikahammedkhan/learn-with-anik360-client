import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1 className="my-12 text-5xl font-bold text-sky-500 text-center">Explore Our Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(course => <div key={course.id} className="rounded-md p-4">
                        <div className="card card-compact bg-base-100 shadow-xl h-full">
                            <figure><img src={course.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{course.title}</h2>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link to={`../courses/${course.id}`}>See Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Courses;