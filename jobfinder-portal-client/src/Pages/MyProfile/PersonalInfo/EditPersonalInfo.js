import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const EditPersonalInfo = ({ user , refetch}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        axios.patch(`https://arcane-thicket-72200.herokuapp.com/users/${user?.email}`,{
            phoneNumber: data?.phoneNumber,
            address: data?.address
        })
        .then(res=>{
            if(res.data.modifiedCount===1){
                refetch()
                toast.success('Successfully Updated')
            }
            else{
                toast('Something went wrong, Please try again')
            }
        })
    };
    return (
        <div>
            <input type="checkbox" id="personal-inf-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-2xl text-secondary text-center font-medium">Personal Details</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Name</span>
                            <input type="text" className='input input-bordered w-full' disabled defaultValue={user?.name} />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Email</span>
                            <input type="text" className='input input-bordered w-full' disabled defaultValue={user?.email} />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Phone</span>
                            <input type="tel" className='input input-bordered w-full' {...register("phoneNumber")} defaultValue={user?.phoneNumber} placeholder="Phone Number" />
                        </label>
                        <label className="block">
                            <span className="block text-sm font-medium my-2">Address</span>
                            <input type="text" className='input input-bordered w-full' {...register("address")} defaultValue={user?.address}  placeholder="Address" />
                        </label>
                        <button type='submit' className='btn mt-5 text-white'>Update</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="personal-inf-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPersonalInfo;