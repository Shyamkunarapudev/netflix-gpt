import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:'gpt',
  initialState:{
    showGptPage: false,
    searchMovieList:null
  },
  reducers:{
    gptTogglePage: (state)=>{
      state.showGptPage = !state.showGptPage
    },
    addSearchMoviesList: (state, action)=>{
      state.searchMovieList = action.payload
    },
    removeSearchMovieList: (state)=>{
      state.searchMovieList = null
    }
    
  }
})

export const {gptTogglePage, addSearchMoviesList, removeSearchMovieList} = gptSlice.actions
export default gptSlice.reducer