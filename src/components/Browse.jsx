import { useSelector } from 'react-redux'
import Header from './Header'
import MainContainer from './MainContainer'
import Secondary from './Secondary'
import NetflixGPT from './NetflixGPT'


const Browse = () => {
  const showGPT = useSelector(store=> store.gpt.showGptPage)
  return (
    <div>
      <Header />
      {showGPT?
      <NetflixGPT />
      :<>
        <MainContainer />
        <Secondary />
      </>
      }
    </div>
  )
}

export default Browse