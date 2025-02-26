import React from 'react'
import MovieCard from './MovieCard'

const MovieListComponent = ({genre, data}) => {
  if(!data) return
  return (
    <div className='pb-2 px-4 text-white'>
      <h1 className="text-2xl font-bold py-3 z-10 relative">{genre} &gt;</h1>
      <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
        <div className="flex">
          {data.map((em, arr)=><MovieCard key={arr} movieInfo={em}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieListComponent