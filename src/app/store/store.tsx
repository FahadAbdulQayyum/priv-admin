import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import loaderReducer from './loaderSlice'; // Import the loader reducer
import { loadState, saveState } from './localStorage';

// Load persisted state from localStorage
const persistedState = loadState();

export const store = configureStore({
    reducer: {
        product: productReducer, // Reducer for the product slice
        loader: loaderReducer,   // Add the loader reducer
    },
    preloadedState: persistedState, // Use persisted state if available
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Save state to localStorage whenever it changes
store.subscribe(() => {
    saveState({
        product: store.getState().product, // Save only the product slice
    });
});