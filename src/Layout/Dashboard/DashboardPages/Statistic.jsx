import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import docTitle from "../../../Hooks/Title";
import Loading from "../../Components/Loading";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const axiosSecure = useAxiosSecure();
  const { data: statistic, isLoading: statisticLoading } = useQuery({
    queryKey: ["statistic"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin/analytics");
      return data;
    },
  });
  docTitle("Manage user | Dashboard");
  if (statisticLoading) return <Loading></Loading>;
  return (
    <div className=" bg-white dark:bg-secondary rounded-md font-roboto">
      <h1 className="text-lg md:text-2xl font-semibold text-center pt-6 font-poppins mb-10">
        {" "}
        Statistic
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={statistic}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Legend />
          <Area
            type="monotone"
            dataKey="count"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="count" stroke="#ff7300" />
          <Scatter dataKey="count" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistic;
