import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: 'info',
  initialState: null,

  reducers:{
    addMovieInfo: (state, action)=>{
      return action.payload
    },
    removeMovieInfo:(state)=>{
      return null
    }
  }
})

export const {addMovieInfo, removeMovieInfo } = infoSlice.actions
export default infoSlice.reducer