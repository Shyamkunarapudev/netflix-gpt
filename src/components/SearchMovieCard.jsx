import React from 'react'

const SearchMovieCard = ({data}) => {
  const {movie, hero, director} = data
  return (
    <div className="md:p-4 p-3 m-2 bg-emerald-500 rounded-lg text-white">
      <h1 className="font-bold text-2xl md:text-3xl text-nowrap">{movie}</h1>
      <h2 className="font-medium"><span className='text-black'>Hero: </span>{hero}</h2>
      <h3 className="font-medium"><span className='text-black'>Director: </span>{director}</h3>
    </div>
  )
}

export default SearchMovieCard