"use client"; // Mark this file as a Client Component

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store';

const AppLoader = () => {
    // const isLoading = useSelector((state) => state.loader?.isLoading);
    const isLoading = useSelector((state: RootState) => state.loading.loading);


    return (
        <>
            {isLoading && (
                <div className="loader-container">
                    <div className="loader-background-blur"></div>
                    <div className="loader-spinner">
                        {/* Add your awesome loader here */}
                        <div className="spinner"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AppLoader;
























// "use client"

// // import { RootState } from '@/app/store/store';
// import { RootState } from '../lib/store';
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// const AppLoader = () => {
//     // Access the loading state from the Redux store
//     // const isLoading = useSelector((state: RootState) => state.loader.isLoading);
//     // const isLoading = useSelector((state: RootState) => state.loader.isLoading);
//     const isLoading = useSelector((state: RootState) => state.loading.loading);

//     const [loaderWidth, setLoaderWidth] = useState(0);
    

//     // const state = useSelector((state: RootState) => state);
//     // console.log('Redux state:', state);

//     return (
//         <div>
//             {/* Render the loader if isLoading is true */}
//             {/* {isLoading && <div className="loader">Loading...</div>} */}
//             {isLoading && (
//                 <span
//                     className="absolute top-0 left-0 h-1 bg-red-600 transition-all duration-300"
//                     style={{ width: `${loaderWidth}%` }}
//                 ></span>
//             )}
//         </div>
//     );
// };

// export default AppLoader;