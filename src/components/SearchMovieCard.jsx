import React from 'react'

const SearchMovieCard = ({data}) => {
  const {movie, hero, director} = data
  return (
    <div className="md:p-4 p-1 m-2 bg-emerald-500 rounded-lg text-white">
      <h1 className="font-semibold md:text-3xl text-nowrap text-cyan-900">{movie}</h1>
      <h2 className="font-medium text-sm"><span className='text-black'>Hero: </span>{hero}</h2>
      <h3 className="font-medium text-sm"><span className='text-black'>Director: </span>{director}</h3>
    </div>
  )
}

export default SearchMovieCard