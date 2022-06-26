import {configureStore} from '@reduxjs/toolkit'
import {setCode} from './reduxStore/CodeState'
export default configureStore({
    reducer: {
        setCode: setCode,
    },
})