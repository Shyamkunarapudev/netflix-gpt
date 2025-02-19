import useSecondary from '../utils/hooks/useSeconary'
import MovieListComponent from './MovieListComponent'
import { GENRE } from '../utils/constants'

const Secondary = () => {

  const MoviesData = useSecondary()

  if(!MoviesData) return


  return (
    <div className='bg-black pl-4'>
      <div className=" -mt-44 ">
        <div>
          {MoviesData.map((el, arr)=><MovieListComponent genre={GENRE[arr]} data={el} />)}
        </div>
      </div>
    </div>
  )
}

export default Secondary