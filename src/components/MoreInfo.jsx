import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MoreInfo = () => {
  const navigate = useNavigate()
  const getMovieInfo = useSelector(store=> store.info)
  
  if(!getMovieInfo) return

  const {Poster,Title,Actors,Director,Writer,Genre,Language,Released,BoxOffice,imdbRating,Plot } = getMovieInfo

  const goHomeHandler=()=>{
    navigate("/browse")
  }

  return (
    <div className='bg-black text-white h-screen'>
      <div className="flex justify-end">
         <button className='px-2 py-1 m-3 mr-16  bg-sky-700 font-semibold text-white rounded-md' onClick={goHomeHandler}>Home</button>
      </div>
      <div className="w-[90%] mb-4 p-4 mx-auto flex border rounded-lg bg-gray-800">
        <div className="w-[30%]">
          <img className="rounded-lg" src={Poster} />
        </div>
        <div className="w-[70%]">
          <h1 className="font-bold text-4xl text-amber-500">{Title}</h1>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Actors: </span>{Actors}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Director: </span>{Director}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Writer: </span>{Writer}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Genre: </span>{Genre}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Language: </span>{Language}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Released: </span>{Released}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-xl">Box Office: </span>{BoxOffice}</h2>
          <h2 className="font-medium text-sm"><span className="font-bold text-orange-600 text-2xl">imdb Rating: </span>{imdbRating}</h2>
          <p className=""><span className="font-bold text-orange-600 text-2xl">Plot: </span>{Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo