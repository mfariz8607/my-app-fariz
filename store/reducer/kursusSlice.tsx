import { createSlice } from '@reduxjs/toolkit';
export const kursusSlice = createSlice ({
    name: 'kursus',
    initialState: {
        data: [],
    },
    reducers: {
        setData:(state, action) => {
            state.data = action.payload
        }
    }
})

export const {setData} = kursusSlice.actions
export default kursusSlice.reducer