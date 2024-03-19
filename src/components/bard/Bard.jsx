import React, {useContext, useState} from "react";
import './bard.css';
import history_icon from '../../assets/history_icon.png'
import menu_icon from '../../assets/icons8-hamburger-50.png'
import plus_icon from '../../assets/plus_icon.png'
import question_icon from '../../assets/question_icon.png'
import setting_icon from '../../assets/setting_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import message_icon from '../../assets/message_icon.png'
import { Context } from "../../context/Context";


const Bard = () => {
    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompt, setRecentPrompt} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    return(
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu" src={menu_icon} alt="" />
                <div className="new-chat">
                    <img src={plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? 
                <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item, index) => {
                    return (
                    <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={message_icon} alt="" />
                    <p>{item.slice(0,20)} ...</p>
                </div>
                    )
                })}
            </div> : null
            }
                
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={setting_icon} alt="" />
                    {extended ? <p>Settngs</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Bard