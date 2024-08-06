import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { searchReducer, detailReducer } from './reducer'


export const store = configureStore({
    reducer: {
        searching: searchReducer,
        detail : detailReducer
    },
})