import { useEffect, useState } from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics"

const Main = () => {

    const [word,setWord] = useState('')
    const [meanings,setMeanings] = useState(null)

    console.log(meanings)

    useEffect(()=>{
        if(word !== ''){
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(res=>res.json())
                .then(data=>setMeanings(data))
                .catch(err=>console.log(err))
        }
    },[word])

    return ( 
        <div>
            <div className="w-5/6 mx-auto my-4 md:w-2/5">
                <div class="relative mt-1 rounded-md shadow-md word-input">
                    <input 
                    type="text" 
                    name="price" 
                    id="price" 
                    class="block w-full h-12 p-2 rounded-md capitalize border-slate-600 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-md" 
                    placeholder="Enter Word" 
                    onChange={(e)=>setWord(e.target.value)}/>
                    <div class="absolute inset-y-0 right-0 flex items-center">
                    <label className="m-1 p-1 text-sm text-gray-600">English (US)</label>
                    </div>
                </div>
            </div>
            <div className="m-2 md:w-4/6 mx-auto">
                <h1 className="text-2xl font-medium text-center m-4 capitalize tracking-wide md:text-6xl">{meanings ? word : ""}</h1>
                {(Array.isArray(meanings) && word) ? 
                <>
                <div className="my-6">
                {<Phonetics phonetic={meanings[0]?.phonetics}/>}
                </div>
                <div className="mt-4">
                <h3 className="text-2xl mt-6 indent-6 tracking-wide font-semibold text-teal-900">Definitions:</h3>
                { meanings.map((mean)=>{
                    return <Meanings mean={mean?.meanings}/>
                })}</div></> : 
                word !== '' ?
                <div className="text-4xl flex items-center text-black text-center my-32 mx-auto bg-stone-100 p-4 rounded-md w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    <span className="mx-2">No Results Available!</span>
                </div>:""
                }
            </div>
        </div>
     );
}
 
export default Main;