import CustomizedSwitches from './switch'
import ImageAvatars from './avatar'

export default function ChatHeader(){

    return(
        <>
            <div className="flex items-center justify-between h-[9vh] p-[2%]">
                <h4 className='text-xl hover:bg-gray-300 cursor-pointer rounded-md p-[0.2%]'>MyAssist</h4>
                <div className='flex rounded-[50%]'>
                    <CustomizedSwitches/>
                    <ImageAvatars/>  
                </div>
            </div>
        </>
    )
}