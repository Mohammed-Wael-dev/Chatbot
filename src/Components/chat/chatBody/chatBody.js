import Input from './input'
import ChatDiv from './chatDiv'
import { useState } from 'react'
export default function ChatBody(){
    const [message,setMessage] = useState([]);


    return(
        <>
            <div className='w-[100%] h-[91vh] flex flex-col justify-between min-w-fit'>
                <div className='custom-scrollbar flex flex-col overflow-auto'>
                    {
                        message.map((item, index) => {
                            return(
                                <ChatDiv message={item} index={index}/>
                            )
                        })
                    }
                </div>
                <Input setMessage={setMessage} />
            </div>
        </>
    )
}