import React, { useRef } from 'react'
import { BACKGROUND_LOGO_URL } from '../utils/constants'
import languages from '../utils/launguageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GPTSearchBar = () => {
  const searchText = useRef(null)
  const lang = useSelector(store=> store.language.selectedLanguage)

  const handleGPTSearch = async()=>{
    console.log(searchText.current.value)
    const gptQuary = "Act as a movie recommanded system as per quary :" + searchText.current.value + " . give me 10 movies comma superate as like exam. Example: Lucky Baskhar, Saripodhaa Sanivaaram, sarrainodu, Akhanda, Pushpa 2: The Rule"

    const gptResults = await openai.chat.completions.create({
      messages: [
        { role:"system", content: "" },
        { role:"user", content: gptQuary }
      ],
      model: "gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1
    });

  }

  return (
    <div className="w-screen h-screen">
      <div className=" absolute -z-10">
        <img src={BACKGROUND_LOGO_URL} alt="Background image" />
      </div>
      <div className=' pt-[10%]'>
      <form className='w-1/2 mx-auto bg-black grid grid-cols-12 text-white rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} className='p-2 m-4 col-span-9 rounded-lg bg-slate-700' type="text" placeholder={languages[lang].searchPlaceholder} />
        <button onClick={handleGPTSearch} className='p-2 m-4 col-span-3 rounded-lg bg-red-600 '>{languages[lang].search}</button>
      </form>
    </div>
    </div>

  )
}

export default GPTSearchBar