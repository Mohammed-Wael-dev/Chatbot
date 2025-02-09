import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
export default function ChatDiv(){
    
    return(
        <>
            <div class="flex flex-col space-y-4 mx-auto w-[60vw] min-w-[290px]">
                <div class="flex justify-end mx-4">
                    <p class="bg-textbg text-textcolor px-4 my-[2%]  py-2 rounded-xl rounded-tr-none max-w-[50%]">hello</p>
                </div>
                <div class="flex flex-col gap-x-[1%] justify-start mx-4">
                    <p class="py-2 text-textcolor rounded-lg max-w-[70%]">Hello there! How can I help you today? 😊</p>
                    <div className='flex gap-x-[1%] ms-[1%] text-textcolor'>
                        <ThumbUpOffAltIcon className='cursor-pointer'/>
                        <ThumbDownOffAltIcon className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </>
    )
}