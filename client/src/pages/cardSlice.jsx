import { createSlice } from "@reduxjs/toolkit";
const cardSlice=createSlice({
    name:"mycard",
    initialState:{
        card:[]
    },
    reducers:{
        addToCard:(state,actions)=>{
            state.card.push(actions.payload)
        }
    }
})
export const{addToCard}=cardSlice.actions;
export default cardSlice.reducer;