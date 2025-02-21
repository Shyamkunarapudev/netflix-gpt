import React from 'react'
import SearchMovieCard from './SearchMovieCard'
import { useSelector } from 'react-redux'

const GPTSuggetions = () => {
  const list = useSelector(store=> store?.gpt?.searchMovieList?.data)

  if(!list) return
  
  return (
    <div className='flex flex-wrap justify-center absolute top-[40%] left-0'>
      {list.map((movie, arr)=><SearchMovieCard key={arr} data={movie}/>)}
    </div>
  )
}

export default GPTSuggetions