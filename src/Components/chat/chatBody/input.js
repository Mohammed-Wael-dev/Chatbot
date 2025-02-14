export default function Input({setMessage}){

    const sendMessage = (e) => {
        if(e.key === 'Enter' && e.target.value != ''){
            setMessage(prev => [...prev,e.target.value]);
            e.target.value = '';
        }
    }

    return(
        <input onKeyDown={sendMessage} className="w-[45vw] bg-mainbg text-textcolor border-border min-w-[250px] mx-auto ps-[3%] m-[3%] p-[12px] border border-black rounded-[30px] outline-none" placeholder="Ask Any Question"/>
    )
}