import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import learning1 from '../../Assets/learning.json';
import learning2 from '../../Assets/learn.json';
import learning3 from '../../Assets/uiux.json';
import learning4 from '../../Assets/web-development.json';

const Home = () => {
    return (
        <div>
            <div className="hero h-[80vh]" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-sky-500">Welcome To <br /> Learn With Anik360</h1>
                        <h3 className='text-2xl font-bold text-sky-500'>Learn Without Limits</h3>
                        <p className="mb-5">Every student can learn, just not on the same day, or the same way. We build our course so that every student can easily learn. Explore Our Courses,We appreciate your feedback.</p>
                        <button className="btn btn-primary"><Link to='/'>Explore Courses</Link></button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 my-10 gap-4 p-8'>
                <div className='my-auto'>
                    <h1 className='text-5xl font-bold text-sky-500'>Transform Your Life Through Online Education</h1>
                    <p className='my-5 text-lg font-semibold'>Instructors from around the world teach millions of students on Learn With Anik360. We provide the tools and skills to teach what you love. And you can also achieve your goal.</p>
                    <button className='btn btn-info'>Find Out How</button>
                </div>
                <div>
                    <Lottie animationData={learning1} loop={true} />;
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-sky-500 text-center my-6'>Why Should You Choose Anik360</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center p-4'>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://edmy-react.hibootstrap.com/images/features/feature-1.svg" alt="" className="w-full" />
                        <div className="flex flex-col justify-center p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Expert-Led Video Courses</h2>
                                <p className="dark:text-gray-100">Instructors from around the world teach millions of students on Edmy through video.</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://edmy-react.hibootstrap.com/images/features/feature-2.svg" alt="" className="w-full" />
                        <div className="flex flex-col justify-center p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">In-Demand Trendy Topics</h2>
                                <p className="dark:text-gray-100">Instructors from around the world teach millions of students on Edmy through video</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://edmy-react.hibootstrap.com/images/features/feature-3.svg" alt="" className="w-full" />
                        <div className="flex flex-col justify-center p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Segment Your Learning</h2>
                                <p className="dark:text-gray-100">Instructors from around the world teach millions of students on Edmy through vide</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://edmy-react.hibootstrap.com/images/features/feature-4.svg" alt="" className="w-full" />
                        <div className="flex flex-col justify-center p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Always Interactive Learning</h2>
                                <p className="dark:text-gray-100">Instructors from around the world teach millions of students on Edmy through video.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                <h1 className='text-4xl font-bold text-sky-500 text-center my-6'>Our Statistics</h1>
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                        <p className="text-sm sm:text-base">Courses</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">13</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">38,574</p>
                        <p className="text-sm sm:text-base">Students</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">12</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">30+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
            <div className='grid grid-cols-3 align-items-center'>
                <div><Lottie animationData={learning3} loop={true} />;</div>
                <div><Lottie animationData={learning2} loop={true} />;</div>
                <div><Lottie animationData={learning4} loop={true} />;</div>
            </div>
        </div>
    );
};

export default Home;