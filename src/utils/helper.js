import movieList from "./movieList"
import { API_KEY, OMDB_URL } from '../utils/constants'



export const randomMovie = ()=>{
  return movieList[Math.ceil(Math.random() * movieList.length - 1)]
}

export const fetchHelper = async(movie)=>{
  const data = await fetch(OMDB_URL +"t="+movie+API_KEY)
  const json = await data.json()
  return json
}


// const filteredMovie = dbMovie.filter((m)=>m.Title.toLowerCase() === movie.movie.toLowerCase())
// console.log(dbMovie)
// setFindMovie(filteredMovie)


// const [findMovie, setFindMovie] = useState(null)
// const dbMovie = useSelector((store) => store.movie.listOfMoviesData)
// console.log(dbMovie)