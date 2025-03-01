"use client"

import { fetchData, resetData } from "../lib/features/fetchDataSlice"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../lib/hooks"
import { Card } from "../ui/card";
import Client from "../Client";
import { useEffect } from "react";

import { setLoading } from "../lib/features/loader/loaderSlice";
import { RootState } from "../lib/store";


const ClientData = () => {

    const dispatch = useAppDispatch();
    // const { users, loading, error } = useSelector((state: any) => state.fetchData);
    const { data, loading, error } = useSelector((state: any) => state.fetchData);
    // const isLoading = useSelector((state: RootState) => state.loading.loading);

    useEffect(() => {
        // Start the loader
        dispatch(setLoading(true));
        // Fetch users when the component mounts
        // dispatch(fetchUsers({ page: 1, limit: 20 }));
        // dispatch(fetchUsers({ page: 1, limit: 20, "Agents" }));
        dispatch(resetData());
        dispatch(fetchData({ page: 1, limit: 20, collection: "User" }));
        dispatch(setLoading(false));
    }, [dispatch]);

    useEffect(() => {
        // console.log('users...', users)
        console.log('client - data...', data)
    }, [data]);


    return <>
        {/* {(data.length === 0||isLoading) ? ( */}
        {data.length === 0 ? (
            <div className="loader-container">
            <div className="loader-background-blur"></div>
            <div className="loader-spinner">
                <div className="spinner"></div>
            </div>
        </div>        
        // <div>No clients found</div>
        // </div>
        ) : (
            data.map((user: any) => (
                <Card key={user._id}>
                    <Client
                        svcs="$180"
                        payout="$244"
                        clientname={`${user.firstName} ${user.lastName}`}
                        clientphone="435 748 9883"
                        clientemail={user.email}
                        proemail={user.email}
                        proephone="434 845 8738"
                        gender="male"
                        status="online"
                        proimage={user?.profilePicture || 'http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-60381ebd4cd7ef60566c9fc7-profilePic/1739003549638.jpeg'}
                    />
                </Card>
            ))
        )}
    </>
}


export default ClientData