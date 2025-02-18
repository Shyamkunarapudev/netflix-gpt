import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movie",
  initialState:{
    listOfMoviesData: null,
  },
  reducers:{
    addMovies: (state, action)=>{
      state.listOfMoviesData = action.payload

    },
    removeMovies: (state) =>{
      state.listOfMoviesData = null
    }
  }
})

export const {addMovies, removeMovies} = movieSlice.actions

export default movieSlice.reducer