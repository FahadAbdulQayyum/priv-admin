"use client"

import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/components/lib/hooks";
import { RootState } from '@/components/lib/store';
import { dataType, DynamicAPI, fetchDynamicAPIs } from '@/components/lib/features/dynamicApiCall/dynamicAPISlice';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

// const Job = ({ type, definedField }: { type: string, definedField: string[] }) => {
const Job = () => {

    // // const [data, setData] = useState<dataType[]>([]);
    // const [data, setData] = useState<DynamicAPI[]>([]);
    // const [loading, setLoading] = useState(true);
    // // const [data, setData] = useState([]);

    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const apiResult = async () => {
    //         setLoading(true)
    //         const api = await dispatch(
    //             fetchDynamicAPIs({
    //                 // collectionType: "job", // Replace with your collection type
    //                 collectionType: type, // Replace with your collection type
    //                 // specificFields: ["name", "variation", "currently_offered", "pic", "city_available", "price", "agent_chosen", "time"], // Replace with needed fields
    //                 // specificFields: ["_id", "name", "city_available", "selected_services_list", "agent_chosen", "_createdAt", "time"], // Replace with needed fields
    //                 specificFields: definedField, // Replace with needed fields
    //             })
    //         )
    //         console.log('...api...', api.payload);
    //         if (api.payload) {
    //             setData(api.payload as DynamicAPI[]); // Ensure TypeScript knows it's an array
    //             setLoading(false)
    //         }
    //     }
    //     apiResult();
    // }, [])

    // if (loading) {
    //     return <div className="flex justify-center items-center h-screen relative">
    //         <div className="loader  border-t-2 border-b-2 border-blue-500 rounded-full w-6 h-6 animate-spin"></div>
    //     </div>;
    // }

    return (
        <div className="flex space-x-1 overflow-hidden overflow-x-auto scrollbar-hide">
            <div className="flex flex-col space-y-1">
                <Button>Reassign Job</Button>
                <Button>Agent Cancel</Button>
                <Button>Agent Cancel w FMAP</Button>
                <Button>Client Cancel</Button>
                <Button>CS Cancel</Button>
                <Button>Make Note</Button>
                <Button>Make FMAP</Button>
                <Button>Client Communication</Button>
            </div>
            <div className="flex flex-col space-y-1 items-center">
                <p>Svcs:$180</p>
                <p>Est Tip: $30</p>
                <p>Est PF: $24</p>
                <p>Act Tip: $0</p>
                <p>Act PF: $0</p>
                <p>Tax: $0</p>
                <p>Travel: $0</p>
                <p>Payout: $144</p>
                <Button>Change Price</Button>
            </div>
            <div className="flex flex-col space-y-1 items-center">
                <p>Ava DeSena</p>
                <p>643 345 4456</p>
                <p>adsena88@gmail.com</p>
                <Button>Credit Client</Button>
                <Button>Change Client</Button>
            </div>
            <div className="flex flex-col space-y-1 items-center">
                <p>jillianocasio@me.com</p>
                <p>female</p>
                {/* <span > */}
                {/* <Image src="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5cf6faaa5c883cc930bb0dca-profilePic/1711243961568.jpeg" alt="pro-profile-img" height={20} width={20} className="rounded-full h-10 w-[100%]" /> */}
                <Image
                    src="http://sj082i.cloudimg.io/s/resize/200/https://agent-headshot.s3.us-west-2.amazonaws.com/Photo-5cf6faaa5c883cc930bb0dca-profilePic/1711243961568.jpeg"
                    alt="pro-profile-img"
                    height={40}
                    width={40}
                    className="rounded-full h-10 w-10 object-cover"
                />
                {/* </span> */}
                <Button>Press En Route</Button>
                <p className="text-red-500 text-sm">WAS CANCELLED BY ORIGINAL PRO</p>
                <p>Requested Agent: Find Me a Pro</p>
            </div>
            <div className="flex flex-col space-y-1 items-center">
                <p>February 21 2025 8:30 AM</p>
                <label>Change Day:</label>
                <select className="border p-1 rounded">
                    <option value="e" selected></option>
                    <option value="mon">Monday</option>
                    <option value="tue">Tuesday</option>
                    <option value="wed">Wednesday</option>
                    <option value="thu">Thursday</option>
                    <option value="fri">Friday</option>
                    <option value="sat">Sat</option>
                    <option value="sun">Sun</option>
                </select>
                <label>Change Time:</label>
                <select className="border p-1 rounded">
                    <option value="e" selected></option>
                    <option value="8">8:00AM</option>
                    <option value="9">9:00AM</option>
                    <option value="10">10:00AM</option>
                </select>
                <Button>Get Available Times</Button>
            </div>
            <div className="flex flex-col space-y-1 items-center">
                <p>1 Grand Cypress Blvd Orlando FL 32836 undefined</p>
                <Button>Change Addr</Button>
                <Button>Block User</Button>
            </div>
            <div className="flex flex-col space-y-1 items-center">
                <label>Service Add On</label>
                <input className="border p-1 rounded" />
                <label>Travel Fee</label>
                <input className="border p-1 rounded" value={0} />
                <label>Travel Fee</label>
                <input className="border p-1 rounded" value={0} />
                <label>Late Fee</label>
                <input className="border p-1 rounded" value={0} />
                <label>Offer Bonus</label>
                <input className="border p-1 rounded" />
            </div>

        </div>
        // <div
        //     // className="space-y-1 px-standardSize"
        //     className="space-y-1"
        // >
        //     {
        //         data && data.map((v, i) => <div key={v._id} className="bg-gray-200 hover:bg-gray-300 p-2 rounded shadow">
        //             <span className="flex items-center space-x-2">
        //                 <Image
        //                     // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Faccount-icon-vector&psig=AOvVaw2xa2q7Kmakbe9RAGIfLLnW&ust=1738872681858000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiC2turrYsDFQAAAAAdAAAAABAE" alt="logo"
        //                     src="/assets/account.png"
        //                     // src="/assets/account.webp"
        //                     alt="logo"
        //                     width={30}
        //                     height={30}
        //                     unoptimized={true} // Disable optimization

        //                 />
        //                 <span
        //                     className="flex flex-col space-y-1"
        //                 >
        //                     <div className="text-sm">{v.name}</div>
        //                     <div className="text-base">{v._createdAt}</div>
        //                 </span>
        //             </span >
        //         </div>
        //         )
        //     }
        // </div >
    )
}

export default Job
