import React from 'react'
import '../component/index.css'
import { useState } from 'react';
import axios from 'axios'

export const Index = () => {
    const [chatGptView, setChatGptView] = useState(true);
    const [msg, setMsg] = useState([]);
    const [text, setText] = useState("");
    const [response,setResponse]= useState("");
    function submitForm() {
        setChatGptView(false);
        setMsg([...msg,text]);
        axios.post("http://localhost:3080/chat",{text:'What is your name'})
            .then((res)=>{
                console.log(res)
            setResponse(res.data);
        })
            .catch (err=>{
                console.log(err);
            })
        setText("");
    }
  return (
    <div className="main">
        <div className="left">
            <div className="heading">
                <div className="img">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>

                New Chats
                </div>
            <div className="history"></div>
        </div>
        <div className="right">
            
            <div className={chatGptView?'chatGpt':'none'}>ChatGPT</div>
            <div className="collection"></div>
            {
                msg.map((message)=>{
                    return (
                        <>
                        <div className="messageMine msg">{message}</div>
                        <div className="messageChatGPT msg">{response}</div>
                        </>
                    )
                    
                })
            }


            <form >
                <input type="text" placeholder='Send a message' 
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
              <div className="btn" >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"  stroke-width="2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor" onClick={submitForm}></path></svg>
                </div>

            </form>
        </div>
    </div>
  )
}
