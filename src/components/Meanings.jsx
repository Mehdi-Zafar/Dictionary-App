import Meaning from "./Meaning";

const Meanings = (props) => {
    return ( 
        <div className="my-4 p-2 text-teal-900">
            <h3>
            {props.mean.map((def)=>{
                return (
                <div>
                    <h2 className="m-2 font-bold text-xl capitalize italic">{def.partOfSpeech}</h2>
                    <Meaning def={def.definitions}/>
                    {def.synonyms.length !== 0 ? 
                    <div className=" bg-stone-100 p-3 my-3 text-lg ">
                        <h2 className="font-bold">Synonyms : </h2>
                        <div className="flex flex-wrap">
                            {def.synonyms && def.synonyms.map((syn)=>{
                                return <div className="m-3 py-1 px-3 font-semibold tracking-wide bg-stone-200 leading-8 capitalize rounded-md">{syn}</div>
                            })}
                        </div>
                    </div> : ""}
                    {def.antonyms.length !== 0 ? 
                    <div className=" bg-stone-100 p-3 my-3 text-lg ">
                        <h2 className="font-bold">Antonyms : </h2>
                        <div className="flex flex-wrap">
                            {def.antonyms && def.antonyms.map((ant)=>{
                                return <div className="m-3 py-1 px-3 font-semibold tracking-wide bg-stone-200 leading-8 capitalize rounded-md">{ant}</div>
                            })}
                        </div>
                    </div> : ""}
                </div>
                )
            })}
            </h3>
        </div>
     );
}
 
export default Meanings;