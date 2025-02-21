import React from 'react'
import { addMovieInfo } from '../utils/slices/infoSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movieInfo}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const infoHandler =()=>{
    dispatch(addMovieInfo(movieInfo))
    navigate('/browse/info')
  }

  return (
    <div className='w-36 mr-2 z-10'>
      <img className='rounded-lg cursor-pointer' src={movieInfo.Poster} alt="Movie Poster" onClick={infoHandler} />
    </div>
  )
}

export default MovieCard