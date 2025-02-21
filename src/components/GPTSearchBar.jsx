import React, { useRef } from 'react'
import { BACKGROUND_LOGO_URL } from '../utils/constants'
import languages from '../utils/launguageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { addSearchMoviesList } from '../utils/slices/gptSlice'

const GPTSearchBar = () => {
  const searchText = useRef(null)
  const lang = useSelector(store=> store.language.selectedLanguage)
  const dispatch = useDispatch()

  const handleGPTSearch = async()=>{
    console.log(searchText.current.value)
    const gptQuary = "Act as a movie recommanded system. Quary:" + searchText.current.value + " . give me 5 movies info in json formate as per quary . Example: {data:[{movie: Lucky Buskhar, hero: Dulquer Salmaan,director:Venky Atluri},{movie:Saripodhaa Sanivaaram, hero:Nani, director:Vivek Athreya}]}"

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

    const removeOne = gptResults?.choices[0]?.message.content.replaceAll('```','')
    const removeJson = removeOne.replace("json",'')
    const stringToObject = JSON.parse(removeJson)
    dispatch(addSearchMoviesList(stringToObject))
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