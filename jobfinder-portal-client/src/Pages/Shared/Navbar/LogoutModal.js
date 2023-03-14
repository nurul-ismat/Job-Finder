import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../../firebase.init';

const LogoutModal = () => {
    return (
        <div>
            <input type="checkbox" id="logoutModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <h3 className="font-bold text-lg">Sign out?</h3>
                    <p className="py-4">Are you sure you want to sign out?</p>
                    <div className="flex justify-around items-center">
                        <label onClick={()=>signOut(auth)} htmlFor="logoutModal" className="btn btn-ghost">Yes</label>
                        <label htmlFor="logoutModal" className="btn btn-ghost"><span className='text-primary'>Cancel</span></label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LogoutModal;