import React from 'react'

const SearchMovieCard = ({data}) => {
  const {movie, hero, director} = data
  return (
    <div className="p-2 m-2 bg-emerald-500 rounded-lg text-white">
      <h1 className="font-bold text-3xl text-nowrap"><span className='text-black'>Movie: </span>{movie}</h1>
      <h2 className="font-medium"><span className='text-black'>Hero: </span>{hero}</h2>
      <h3 className="font-medium"><span className='text-black'>Director: </span>{director}</h3>
    </div>
  )
}

export default SearchMovieCard