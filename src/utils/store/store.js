import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice"
import movieSlice from "../slices/movieSlice"
import gptSlice from "../slices/gptSlice"
import languageSlice from "../slices/languageSlice"
import infoSlice from "../slices/infoSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    language: languageSlice,
    info: infoSlice
  }
})

export default store