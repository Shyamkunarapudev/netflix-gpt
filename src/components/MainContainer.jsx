import React, { useEffect, useRef, useState } from 'react'
import movieList from '../utils/movieList'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../utils/slices/movieSlice'
import { randomMovie, fetchHelper } from '../utils/helper'
import SimmerUI from './SimmerUI'
import VideoTitle from './VideoTitle'


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
      <VideoTitle movieTitle={findMovie[0]?.Title} moviePlot={findMovie[0]?.Plot} moreInfo={findMovie[0]}/>
    </div>
  )
}

export default MainContainer