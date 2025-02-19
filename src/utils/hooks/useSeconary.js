import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'


const useSecondary = ()=>{
  const [dramaMovie, setDramaMovie]= useState(null)
  const [actionMovie, setActionMovie]= useState(null)
  const [crimeMovie, setCrimeMovie]= useState(null)
  const [fantasyMovie, setFantasyMovie]= useState(null)
  const [thrillerMovie, setThrillerMovie]= useState(null)
  const [sciFiMovie, setSciFiMovie]= useState(null)
  const [adventureMovie, setAdventureMovie]= useState(null)
  const [westernMovie, setWesternMovie]= useState(null)
  const [mysteryMovie, setMysteryMovie]= useState(null)
  const [romanceMovie, setRomanceMovie]= useState(null)
  const [biographyMovie, setBiographyMovie]= useState(null)
  const [historyMovie, setHistoryMovie]= useState(null)

  const sample = useRef(null)
  
  const dbMovie = useSelector(store => store.movie.listOfMoviesData)
  sample.current = dbMovie


  useEffect(()=>{
    if(sample){      
      const drama = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("drama"))
      setDramaMovie(drama)
      const crime = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("crime"))
      setCrimeMovie(crime)
      const adventure = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("adventure"))
      setAdventureMovie(adventure)
      const action = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("action"))
      setActionMovie(action)
      const fantasy = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("fantasy"))
      setFantasyMovie(fantasy)
      const thriller = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("thriller"))
      setThrillerMovie(thriller)
      const scifi = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("sci-fi"))
      setSciFiMovie(scifi)
      const western = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("western"))
      setWesternMovie(western)
      const mystery = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("mystery"))
      setMysteryMovie(mystery)
      const romance = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("romance"))
      setRomanceMovie(romance)
      const biography = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("biography"))
      setBiographyMovie(biography)
      const history = sample.current?.filter((m)=>m.Genre.toLowerCase().includes("history"))
      setHistoryMovie(history)
    }
  },[sample.current])

  return [dramaMovie, actionMovie, crimeMovie, fantasyMovie, thrillerMovie, sciFiMovie, adventureMovie, westernMovie, mysteryMovie, romanceMovie, biographyMovie, historyMovie]

}


export default useSecondary;