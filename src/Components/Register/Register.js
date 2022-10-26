import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import learning6 from '../../Assets/register.json';
import { AuthContext } from '../../Context/UserContext';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { auth, createUser, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                setError('');
                form.reset();
                verifyEmail();
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                setError(error.message);
            });
    };
    return (
        <div className='grid grid-cols-2 my-12 justify-items-center place-items-center'>
            <div>
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Register for an account</h2>
                    <p className="text-sm text-center dark:text-gray-400">Already have an account?
                        <Link to="/login" className="focus:underline hover:underline text-cyan-500"> Login here</Link>
                    </p>
                    <div className="flex items-center w-full my-4">
                        <div className="w-full dark:text-gray-400">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm">Your Name</label>
                                        <input type="text" name="name" id="name" placeholder="Your Name here " className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="photoURL" className="block text-sm">Your Photo URL</label>
                                        <input type="text" name="photoURL" id="photoURL" placeholder="Your Photo URL Here " className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm">Email address</label>
                                        <input type="email" name="email" id="email" placeholder="Your Email " className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-600" required />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <label htmlFor="password" className="text-sm">Password</label>
                                        </div>
                                        <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-600" required />
                                    </div>
                                </div>
                                <p className='text-red-500'>{error}</p>
                                <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-sky-500 dark:text-gray-900 hover:bg-cyan-500">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Lottie animationData={learning6} loop={true} />;
            </div>
        </div>
    );
};

export default Register;