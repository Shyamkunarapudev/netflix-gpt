import React from 'react'

const MovieCard = ({movieInfo}) => {
  return (
    <div className='w-36 mr-2 z-10'>
      <img className='rounded-lg' src={movieInfo.Poster} alt="" />
    </div>
  )
}

export default MovieCard