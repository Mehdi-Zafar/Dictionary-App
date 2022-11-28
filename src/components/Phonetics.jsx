import ReactAudioPlayer from 'react-audio-player';

const Phonetics = (props) => {
    return ( 
        <div>
            {(props.phonetic.length > 0) ? props.phonetic.map((phonetic)=>{
                if(phonetic.audio !== ''){
                    props.setPhonetic(true)
                    console.log(phonetic.audio)
                    return(
                        <div className="m-3 shadow-md w-fit rounded-md">
                            {phonetic.audio ?
                            <ReactAudioPlayer
                            src={phonetic.audio}
                            controls
                            /> :
                            ""}
                        </div>
                    )
                }
            }) : 
                ""
            }
        </div>
     );
}
 
export default Phonetics;