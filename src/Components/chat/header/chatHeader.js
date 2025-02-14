import CustomizedSwitches from './switch'
import ImageAvatars from './avatar'
import { useTheme } from '../../ThemeContext';
export default function ChatHeader(){
    const {theme, toggleTheme} = useTheme();
    document.documentElement.setAttribute('data-theme', window.localStorage.getItem('theme'));
    window.localStorage.setItem('theme', theme ?? 'light');

    return(
        <div className="flex items-center justify-between h-[9vh] p-[2%]">
            <h4 className="hover:bg-logo text-textcolor text-xl cursor-pointer rounded-md p-[0.2%]">MyAssist</h4>
            <div className='flex rounded-[50%]'>
                <CustomizedSwitches onClick={toggleTheme}/>
                <ImageAvatars/>  
            </div>
        </div>
    )
}