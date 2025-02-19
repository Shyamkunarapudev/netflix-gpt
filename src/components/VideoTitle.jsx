import React from 'react'

const VideoTitle = ({movieTitle, moviePlot}) => {
  return (
    <div className="w-screen h-screen absolute bg-gradient-to-r from-black top-0 left-0 pt-20 px-20 z-10  text-white">
      <h1 className="font-bold text-4xl z-10 my-6 w-1/3">{movieTitle}</h1>
      <p className="font-semibold text-sm/5 w-1/3">{moviePlot}</p>
      <div className="w-1/3 flex mt-6 gap-3">
        <button className="w-1/2 py-2 text-xl bg-white/80 text-black rounded-lg font-semibold" >Play</button>
        <button className="w-1/2 py-2 text-xl rounded-lg font-semibold bg-slate-400/50">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle