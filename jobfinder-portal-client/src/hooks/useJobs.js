import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useJobs = () => {
    const { data, isLoading } = useQuery(['jobs'], () => axios('https://arcane-thicket-72200.herokuapp.com/jobs'))
    const jobs = data?.data;
    return [jobs, isLoading]
}
export default useJobs