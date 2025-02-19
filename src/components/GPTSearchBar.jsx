import React from 'react'
import { BACKGROUND_LOGO_URL } from '../utils/constants'
import languages from '../utils/launguageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const lang = useSelector(store=> store.language.selectedLanguage)

  return (
    <div className="w-screen h-screen">
      <div className=" absolute -z-10">
        <img src={BACKGROUND_LOGO_URL} alt="Background image" />
      </div>
      <div className=' pt-[10%]'>
      <form className='w-1/2 mx-auto bg-black grid grid-cols-12 text-white rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input className='p-2 m-4 col-span-9 rounded-lg bg-slate-700' type="text" placeholder={languages[lang].searchPlaceholder} />
        <button className='p-2 m-4 col-span-3 rounded-lg bg-red-600 '>{languages[lang].search}</button>
      </form>
    </div>
    </div>

  )
}

export default GPTSearchBar