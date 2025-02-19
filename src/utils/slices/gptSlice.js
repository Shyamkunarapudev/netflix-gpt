import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptPage: false
  },
  reducers:{
    gptTogglePage: (state, action)=>{
      state.showGptPage = !state.showGptPage
    }
  }
})

export const {gptTogglePage} = gptSlice.actions
export default gptSlice.reducer