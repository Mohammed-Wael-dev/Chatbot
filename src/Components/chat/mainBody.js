import ChatHeader from './header/chatHeader';
import ChatBody from './chatBody/chatBody';

export default function MainBody(){

    return(
        <div className='bg-mainbg h-[100vh]'>
            <ChatHeader/>
            <ChatBody/>
        </div>
    )
}