import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';


    const store = configureStore({
        reducer: {
            auth: authSlice,
            // TODO add more slices when more posts comes in future
        }
        
    })

    export default store;
