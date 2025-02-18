import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice"
import movieSlice from "../slices/movieSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice
  }
})

export default store