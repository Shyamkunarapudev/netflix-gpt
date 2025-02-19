import React, { useEffect, useRef, useState } from 'react'
import movieList from '../utils/movieList'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../utils/slices/movieSlice'
import { randomMovie, fetchHelper } from '../utils/helper'
import SimmerUI from './SimmerUI'


const MainContainer = () => {

  const [movie, setMovie] = useState(null)
  const [findMovie, setFindMovie]= useState(null)
  const sample = useRef(null)
  
  const dbMovie = useSelector(store => store.movie.listOfMoviesData)
  sample.current = dbMovie

  const dispatch = useDispatch()

  useEffect(()=>{
    fetchData();
    setMovie(randomMovie())
  },[])

  useEffect(()=>{
    if(movie){      
      const found = sample.current?.filter((m)=>m.Title === movie.movie)
      setFindMovie(found)
    }
  },[sample.current])


  const fetchData = async() =>{
    const promiseArray = movieList.map((obj) => fetchHelper(obj.movie));
    const resultList = await Promise.all(promiseArray)
    dispatch(addMovies(resultList))
  }

  if(!movie) return <SimmerUI />
  if(!findMovie) return

  return (
    <div>
      <div className="">
       <iframe className='w-screen h-screen' src={"https://www.youtube.com/embed/"+movie.youtubeId+"?si=7lHJboLYUjOjY-ch&autoplay=1&mute=1&rel=1&controls=0&modestbranding=1&loop=1"} frameBorder="0"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="w-screen h-screen absolute bg-gradient-to-r from-black top-0 left-0 pt-20 px-20 z-10  text-white">
        <h1 className="font-bold text-4xl z-10 my-6 w-1/3">{findMovie[0]?.Title}</h1>
        <p className="font-semibold text-sm/5 w-1/3">{findMovie[0]?.Plot}</p>
        <div className="w-1/3 flex mt-6 gap-3">
          <button className="w-1/2 py-2 text-xl bg-white/80 text-black rounded-lg font-semibold" >Play</button>
          <button className="w-1/2 py-2 text-xl rounded-lg font-semibold bg-slate-400/50">More Info</button>
        </div>
      </div>
    </div>
  )
}

export default MainContainer