import { ChatIcon } from "./icons";

function ChatButton() {
    return <><button className="chat-btn"><ChatIcon></ChatIcon></button><div class="chat-popup">
        <div class="badge"></div>
    </div></>
}

export default ChatButton;