import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState, useEffect} from 'react';
import { data } from 'autoprefixer';
export default function ChatDiv({message,index}){

    const [answers, setAnswers] = useState([]);
    const [liked, setLiked] = useState(false);
    const [disLiked, setDisLiked] = useState(false);
    async function generateResponse(message){
        
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyC7JtaGY47F-CqvR4iYz_UX8RsTzoaq7GQ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "contents": 
                    [{
                        "parts":
                        [{
                            "text": message
                        }]
                    }]
                }),
            })
            let data = await response.json();
            setAnswers(prev => [...prev,data.candidates[0].content.parts[0].text]);
        }
        useEffect(() => {
            generateResponse(message);
            console.log(data.candidates);
    },[message])

    function handleLike(){
        if(!liked && !disLiked){
            setDisLiked(false);
            setLiked(true)
        }else{
            setLiked(false);
        }
    }
    function handleDisLike(){
        if(!disLiked && !liked){
            setLiked(false);
            setDisLiked(true)
        }else{
            setDisLiked(false);
        }    
    }

    return(
        <>
            <div key={index} class="flex flex-col space-y-4 mx-auto w-[60vw] min-w-[290px]">
                <div class="flex justify-end mx-4">
                    <p class="bg-textbg text-textcolor px-4 my-[2%]  py-2 rounded-xl rounded-tr-none max-w-[50%]">{message}</p>
                </div>
                <div class="flex flex-col gap-x-[1%] justify-start mx-4">
                    <p class="py-2 text-textcolor rounded-lg max-w-[70%]">{answers[answers.length - 1] || 'Loading...'}</p>
                    <div className='flex gap-x-[1%] ms-[1%] text-textcolor'>
                        {
                            liked
                            ? 
                            <ThumbUpAltIcon onClick={handleLike} className='cursor-pointer'/>
                            :
                            <ThumbUpOffAltIcon onClick={handleLike} className='cursor-pointer'/>
                        }
                        {
                            disLiked
                            ?
                            <ThumbDownAltIcon onClick={handleDisLike} className='cursor-pointer'/>
                            :
                            <ThumbDownOffAltIcon onClick={handleDisLike} className='cursor-pointer'/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}