import Input from './input'
import ChatDiv from './chatDiv'

export default function ChatBody(){

    return(
        <>
            <div className='w-[100%] flex flex-col justify-between h-[91vh] min-w-fit max-h-fit'>
                <div className='flex flex-col overflow-auto'>
                    <ChatDiv/>
                    <ChatDiv/>
                    <ChatDiv/>
                    <ChatDiv/>
                    <ChatDiv/>
                    <ChatDiv/>
                    <ChatDiv/>
                    <ChatDiv/>
                </div>
                <Input/>
            </div>
        </>
    )
}