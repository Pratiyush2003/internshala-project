import {configureStore} from '@reduxjs/toolkit';
import MainReducer from './Reducers.jsx';

export const store = configureStore({
    reducer : {
        app : MainReducer
    }
})