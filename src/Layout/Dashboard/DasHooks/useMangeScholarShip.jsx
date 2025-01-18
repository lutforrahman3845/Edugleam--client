import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const useMangeScholarShip = () => {
    const axiosSecure = useAxiosSecure();
    const {data:mangeScholarship, isLoading:mangeScholarshipLoading, refetch:mangeScholarshipRefetch}=useQuery({
        queryKey: ["mangeScholarship"],
        queryFn: async () => {
            const {data} = await axiosSecure.get("/manageScholarship")
            return data;
        }
    })
    return {mangeScholarship, mangeScholarshipLoading, mangeScholarshipRefetch};
}
export default useMangeScholarShip;