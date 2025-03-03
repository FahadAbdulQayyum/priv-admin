import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { Card } from "../ui/card"
import { useEffect, useState } from "react";
import { setLoading } from "../lib/features/loader/loaderSlice";
import { fetchData, resetData } from "../lib/features/fetchDataSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../lib/useAppDispatch";

const Graph = () => {

    // Sample Data for Charts
    const jobData = [
        { name: "Today", jobs: 195 },
        { name: "Tomorrow", jobs: 44 },
        { name: "Yesterday", jobs: 31 },
    ]

    const dispatch = useAppDispatch();

    const [page, setPage] = useState(1);
    const { data, loading, error } = useSelector((state: any) => state.fetchData);

    useEffect(() => {
        // Start the loader
        dispatch(setLoading(true));
        dispatch(resetData());
        dispatch(fetchData({ page, limit: 100, collection: "Job",
            filters: {
                createdAt: {
                    $gte: new Date("2025-02-03"), // Start date
                    $lte: new Date("2025-03-09")  // End date
                }
            }
         }));
        // Scroll to the top of the list after fetching new data
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: "smooth", // Smooth scrolling animation
        }); 
        dispatch(setLoading(false));
    }, [dispatch, page]);

    useEffect(() => {
        // console.log('users...', users)
        console.log('job graph - data...', data)
    }, [data]);


    return <>
            {data.length === 0 ? (
            <div className="loader-container">
            <div className="loader-background-blur"></div>
            <div className="loader-spinner">
                <div className="spinner"></div>
            </div>
        </div> 
        ) :
            (<Card className="p-4">
                <h3 className="text-lg font-semibold mb-4">Job Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={jobData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="jobs" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>)
            }
    </>
}

export default Graph;