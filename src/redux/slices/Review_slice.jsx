import { createSlice, current } from "@reduxjs/toolkit";

const initialState= {
    reviews:[]
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers:{
        add_review:(state, {payload})=>{
            console.log('adding review', payload, current(state.reviews));
            state.reviews = [payload, ...state.reviews]
            return state;

        },
        delete_review:(state, {payload})=>{

        },
        edit_review:(state, {payload})=>{

        }
    }
})
export const {add_review, delete_review,edit_review} = reviewsSlice.actions
export default reviewsSlice.reducer