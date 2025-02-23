import useSecondary from '../utils/hooks/useSeconary'
import MovieListComponent from './MovieListComponent'
import { GENRE } from '../utils/constants'

const Secondary = () => {

  const MoviesData = useSecondary()

  if(!MoviesData) return


  return (
    <div className='bg-black md:pl-4 '>
      <div className="-mt-[105%] md:-mt-44 ">
        <div>
          {MoviesData.map((el, arr)=><MovieListComponent key={arr} genre={GENRE[arr]} data={el} />)}
        </div>
      </div>
    </div>
  )
}

export default Secondary