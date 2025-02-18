import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import movieList from '../utils/movieList'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../utils/slices/movieSlice'
import { randomMovie, fetchHelper } from '../utils/helper'
import SimmerUI from './SimmerUI'

const Browse = () => {
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
  console.log(findMovie[0])

  return (
    <div>
      <Header />
      <div className="">
       <iframe className='w-screen h-screen -z-30' src={"https://www.youtube.com/embed/"+movie.youtubeId+"?si=7lHJboLYUjOjY-ch&autoplay=1&mute=1&rel=1&controls=0&modestbranding=1&loop=1"} frameBorder="0"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="w-screen h-screen bg-gradient-to-r from-black absolute top-0"></div>
      <div className="absolute top-24 left-28 z-10 w-1/4 text-white">
        <h1 className="font-bold text-4xl z-10 my-6">{findMovie[0]?.Title}</h1>
        <p className="font-semibold text-sm/5">{findMovie[0]?.Plot}</p>
        <div className="w-full flex mt-6 gap-3">
          <button className="w-1/2 py-2 text-xl bg-white text-black rounded-lg font-semibold" >Play</button>
          <button className="w-1/2 py-2 text-xl rounded-lg font-semibold bg-slate-500/70">Info</button>
        </div>
      </div>
      <div className="">
        <div className="">
          
        </div>
      </div>
      
    </div>
  )
}

export default Browse