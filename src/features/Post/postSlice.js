import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: "",
    reducers: {
        changeActivePostId: (state,action) => state = action.payload}
})

export default postSlice.reducer;
export const {changeActivePostId} = postSlice.actions;

export const activepost = (state) => state.post;