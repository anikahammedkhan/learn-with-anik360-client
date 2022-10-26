import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const CoursesLayout = () => {
    const data = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div>
                {
                    data.map(course => <div key={course.id} className="rounded-md">
                        <h1 className="text-2xl font-bold text-sky-500 my-2 hover:bg-slate-300 p-5 rounded-md"><Link to={`../courses/${course.id}`} >{course.title}</Link></h1>
                    </div>)
                }
            </div>
            <div className='col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CoursesLayout;