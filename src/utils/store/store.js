import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice"
import movieSlice from "../slices/movieSlice"
import gptSlice from "../slices/gptSlice"
import languageSlice from "../slices/languagSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    language: languageSlice
  }
})

export default store