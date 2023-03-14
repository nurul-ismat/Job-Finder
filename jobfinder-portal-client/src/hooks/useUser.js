import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";


const useUser = () => {
    const [user] = useAuthState(auth);
    const { data, isLoading, refetch } = useQuery(['users'], () => axios(`https://arcane-thicket-72200.herokuapp.com/users/${user?.email}`))
    const userInfo = data?.data;
    return [userInfo, isLoading, refetch]
}
export default useUser