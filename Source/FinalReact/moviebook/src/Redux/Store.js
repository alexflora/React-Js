import { configureStore } from '@reduxjs/toolkit'
import { CommonReducer } from './Reducer'

export default configureStore({
    reducer: {
        reducerResult: CommonReducer,
    },
})