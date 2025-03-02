import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import mongoose from 'mongoose';
import Agent from '../../../../models/Agent';
import User from '../../../../models/User';
import Job from '../../../../models/Job';

export async function POST(request: Request) {
    try {
        console.log('fetchData route hit');

        // Parse the request body for parameters
        const { collection, page = 1, limit = 20, filters = {} } = await request.json();


        console.log('with collection...', collection);

        // Connect to MongoDB
        await dbConnect();
        console.log('MongoDB connected...', mongoose.models);

        // Validate the collection name
        // const Model = mongoose?.models[collection];
        let Model: any = collection === 'User' ? User : collection === 'Agent' ? Agent : collection === 'Job' ? Job : User;
        // let Model = collection==='User' ? User : Agent;
        if (!Model) {
            throw new Error(`Model for collection "${collection}" not found`);
        }

        // Calculate the number of documents to skip for pagination
        const skip = (page - 1) * limit;

        // Perform the query
        // const data = await Agent.find(filters)
        const data = await Model?.find(filters)
        // const data = await Job?.find(filters)
            .skip(skip)
            .limit(limit)
            .lean(); // Use `.lean()` for faster performance

        // Return the fetched data in the response
        return NextResponse.json({ [collection]: data });
    } catch (error) {
        console.error('Error fetching data:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
















// // // import { NextResponse } from 'next/server';
// // // import { dbConnect } from '@/lib/dbConnect';
// // // import User from '../../../../models/User';
// // // import Agent from '../../../../models/Agent';

// // // export async function POST(request: Request) {
// // //     try {
// // //         console.log('fetchData route hit');

// // //         // Parse the request body for pagination parameters
// // //         const { page = 1, limit = 20, collection } = await request.json();

// // //         // Connect to MongoDB
// // //         await dbConnect();
// // //         console.log('MongoDB connected...');

// // //         // Calculate the number of documents to skip
// // //         const skip = (page - 1) * limit;

// // //         // Fetch paginated users from the database
// // //         // const users = await User.find({})
// // //         // const users = await collection.find({})
// // //         //     .skip(skip)
// // //         //     .limit(limit)
// // //         //     .lean();

// // //         let data;
// // //         if (collection === 'users') {
// // //             data = await User.find({})
// // //                 .skip(skip)
// // //                 .limit(limit)
// // //                 .lean();
// // //         } else if (collection === 'agents') {
// // //             data = await Agent.find({})
// // //                 .skip(skip)
// // //                 .limit(limit)
// // //                 .lean();
// // //         } else {
// // //             throw new Error('Invalid collection name');
// // //         }


// // //         // Return the fetched users in the response
// // //         // return NextResponse.json({ message: 'Users fetched successfully', users });
// // //         return NextResponse.json({ message: 'Data fetched successfully', data });
// // //     } catch (error) {
// // //         console.error('Error fetching users:', error);
// // //         return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
// // //     }
// // // }