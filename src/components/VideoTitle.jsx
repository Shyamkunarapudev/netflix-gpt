import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovieInfo } from '../utils/slices/infoSlice'

const VideoTitle = ({movieTitle, moviePlot, moreInfo}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const moreInfoHandler = async()=>{
    dispatch(addMovieInfo(moreInfo))
    navigate('/browse/info')
  }

  return (
    <div className="w-screen h-screen absolute bg-gradient-to-r from-black top-0 left-0 md:pt-20 md:px-20 pt-48 p-7 z-10 cursor-pointer text-white">
      <h1 className="font-bold md:text-4xl z-10 mt-6 mb-1 text-[1rem]  md:my-6 md:w-1/3 w-1/2">{movieTitle}</h1>
      <p className="hidden md:inline-block md:font-semibol w-1/2  md:text-sm/5 md:w-1/3">{moviePlot}</p>
      <div className="md:w-1/3 flex mt-2 md:mt-6 gap-3">
        <button className="w-1/5 md:w-1/2 p-1 md:py-2 text-xs md:text-xl bg-white/80 text-black rounded-lg cursor-pointer font-semibold" >Play</button>
        <button className="w-1/5 md:w-1/2 p-1 md:py-2 text-xs md:text-xl rounded-lg font-semibold bg-slate-400/50 cursor-pointer" onClick={moreInfoHandler}>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle