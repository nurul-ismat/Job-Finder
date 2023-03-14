import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import { RiMenu3Fill } from 'react-icons/ri'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import LogoutModal from './LogoutModal';
import Loading from '../Loading/Loading';
import useUser from '../../../hooks/useUser';

const Navbar = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [userInfo, isLoading] = useUser()
    
    if(loading || isLoading){
        return <Loading/>
    }
    const NavLink =
        <>
            <li><CustomLink to="/">Home</CustomLink></li>
            <li><CustomLink to="/jobs">Jobs</CustomLink></li>
            <li><CustomLink to="/blog">Blog</CustomLink></li>
            <li><CustomLink to="/contact">Contact</CustomLink></li>
            {!user && <li><CustomLink to="/login">Login</CustomLink></li>}
        </>

    return (
        <header>
            <nav className="drawer">
                <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-100 px-0 md:px-20 sticky top-0 z-[9999] shadow-md">
                        <div className='navbar-start'>
                            <div className="flex-1 px-2 mx-2 font-bold text-xl from-neutral-content"><span>Job</span><span className='text-primary'>Finder</span></div>
                        </div>
                        <div className="flex-none hidden md:block navbar-center">
                            <ul className="menu menu-horizontal ">
                                {NavLink}
                            </ul>
                        </div>
                        <div className='navbar-end'>
                            <div className="flex-none md:hidden">
                                <label htmlFor="navbar-drawer" className="btn btn-square btn-ghost">
                                    <RiMenu3Fill className='text-xl text-black'></RiMenu3Fill>
                                </label>
                            </div>
                            {
                                userInfo && user && <div className="dropdown dropdown-end">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL || "https://placeimg.com/80/80/people"} alt='' />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                                        {userInfo?.role==='Candidate' && <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/my-profile'>My Profile</Link></li>}
                                        {userInfo?.role==='Candidate' && <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/bookmark'>Bookmark Jobs</Link></li>}
                                        {userInfo?.role==='Candidate' && <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/applied-jobs'>Applied Jobs</Link></li>}
                                        {userInfo?.role==='Requiter' && <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/post-job'>Post Job</Link></li>}
                                        {userInfo?.role==='Requiter' && <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/candidates'>Candidates List</Link></li>}
                                        {user && <li><Link className='bg-base-100 hover:text-primary hover:translate-x-1 delay-75' to='/add-review'>Add Review</Link></li>}
                                        
    
                                        <li><label htmlFor="logoutModal" className="bg-base-100 hover:text-primary hover:translate-x-1 delay-75">Sign Out</label></li>
                                    </ul>
                                </div>
                            }

                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-3/4 bg-base-100">
                        {NavLink}
                    </ul>
                </div>
            </nav>
            <LogoutModal />
        </header>
    );
};

export default Navbar;