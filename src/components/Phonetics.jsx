import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Phonetics = ({phonetic}) => {
    console.log(phonetic)
    return ( 
        <div className="w-full text-center">
            {(phonetic?.length > 0) ? 
                    phonetic.map((phonetic)=>(
                        <div className="my-3 mx-auto shadow-md w-11/12 md:w-3/4">
                            {phonetic?.audio ?
                            <AudioPlayer
                            src={phonetic?.audio}
                            /> :
                            ""}
                        </div>
            )) : 
                ""
            }
        </div>
     )
}
 
export default Phonetics;