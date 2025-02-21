import movieList from "./movieList"
import { OMDB_URL } from '../utils/constants'



export const randomMovie = ()=>{
  return movieList[Math.ceil(Math.random() * movieList.length - 1)]
}

export const fetchHelper = async(movie)=>{
  const data = await fetch(OMDB_URL +"t="+movie+"&apikey="+import.meta.env.VITE_OMDB_KEY)
  const json = await data.json()
  return json
}

