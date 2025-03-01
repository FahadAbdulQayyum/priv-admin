import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
// import { User } from '../../../../models/User';
import User from '../../../../models/User';

export async function POST() {
    try {
        console.log('fetchData route hit'); // Log to confirm the route is being called

        // Connect to MongoDB
        await dbConnect();
        console.log('MongoDB connected...');

        // Fetch all users from the database
        const users = await User.find({}).limit(20).lean(); // Use `.lean()` for faster performance

        // Return the fetched users in the response
        return NextResponse.json({ message: 'Users fetched successfully', users });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}
















// import { NextResponse } from 'next/server';
// import { dbConnect } from '@/lib/dbConnect';

// export async function POST() {
//     try {
//         console.log('fetchData route hit'); // Log to confirm the route is being called

//         // Connect to MongoDB
//         await dbConnect();
//         console.log('MongoDB connected...')
//         // Example: Perform a database operation (e.g., clear user session)
//         // Replace this with your actual logic
//         const result = await someDatabaseOperation();

//         return NextResponse.json({ message: 'Logout successful', result });
//     } catch (error) {
//         console.error('Error during logout:', error);
//         return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
//     }
// }

// // Example database operation (replace with your actual logic)
// async function someDatabaseOperation() {
//     // Example: Query or update data in MongoDB
//     return { success: true };
// }