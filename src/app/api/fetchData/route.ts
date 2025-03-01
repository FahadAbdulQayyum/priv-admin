import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import User from '../../../../models/User';

export async function POST(request: Request) {
    try {
        console.log('fetchData route hit');

        // Parse the request body for pagination parameters
        const { page = 1, limit = 20 } = await request.json();

        // Connect to MongoDB
        await dbConnect();
        console.log('MongoDB connected...');

        // Calculate the number of documents to skip
        const skip = (page - 1) * limit;

        // Fetch paginated users from the database
        const users = await User.find({})
            .skip(skip)
            .limit(limit)
            .lean();

        // Return the fetched users in the response
        return NextResponse.json({ message: 'Users fetched successfully', users });
    } catch (error) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
}