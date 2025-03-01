import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
interface FetchDataState {
    users: any[]; // Replace `any` with a proper type if available
    loading: boolean;
    error: string | null;
}

const initialState: FetchDataState = {
    users: [],
    loading: false,
    error: null,
};

// Create an async thunk to fetch users
export const fetchUsers = createAsyncThunk(
    'fetchData/fetchUsers',
    async (params: { page?: number; limit?: number }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/fetchData', params); // Call your API endpoint
            return response.data.users; // Extract the users from the response
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

// Create the fetchDataSlice
const fetchDataSlice = createSlice({
    name: 'fetchData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload; // Update the users array
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

// Export the reducer and actions
export default fetchDataSlice.reducer;