import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/learnWithLogo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-xl rounded-lg sticky top-0 z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-4/5' src={logo} alt="" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Courses</Link></li>
                    <li><Link to='/'>FAQ</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt='/' src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-20">
                            <li>
                                <Link to='/' className="justify-between">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <li><Link to='/'>Login</Link></li>
                    <li><Link to='/'>Toggle</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;