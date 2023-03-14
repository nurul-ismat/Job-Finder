import axios from 'axios';
import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AddImportantLinks from './AddImportantLinks';

const ImportantLinks = ({ userInfo, refetch }) => {
    const links = userInfo?.links;
    const deleteSwal = withReactContent(Swal);
    const deleteLink = name => {
        deleteSwal.fire({
            icon: 'error',
            title: 'Do you sure want to Delete?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then(result => {
            if (result.isConfirmed) {
                axios.put(`https://arcane-thicket-72200.herokuapp.com/users/links/${userInfo?.email}`, {
                    link: name
                })
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            refetch()
                            toast.success('Successfully Deleted')
                        }
                        else {
                            toast('Something went wrong, Please try again')
                        }
                    })
            }
        })
    }
    return (
        <div className='flex flex-col lg:flex-row justify-between items-baseline text-accent'>
            <p className="font-medium uppercase flex-1">Links</p>
            <div className='flex-[2]'>
                {
                    links && links.map((link, index) =>
                        <div key={index} className='flex justify-between items-baseline'>
                            <div className='my-3'>
                                <p className="font-semibold text-secondary">{link?.name}</p>
                                <small className='text-primary'><a href={link?.link} target="_blank" rel='noreferrer'>{link?.link && link?.link}</a></small>
                            </div>
                            <RiDeleteBin6Line onClick={()=>deleteLink(link?.name)} className='mx-2 text-xl cursor-pointer' />
                        </div>
                    )
                }
                {userInfo?.role==='Candidate' &&  <label htmlFor="link-modal" className="modal-button btn btn-sm text-white">+ Add Link</label>}
            </div>
            <div className='invisible lg:flex'>
                <BsFillPencilFill className='mx-2 text-xl cursor-pointer' />
                <RiDeleteBin6Line className='mx-2 text-xl cursor-pointer' />
            </div>
            {userInfo?.role==='Candidate' &&  <AddImportantLinks user={userInfo} refetch={refetch}/>}
            
        </div>
    );
};

export default ImportantLinks;