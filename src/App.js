import {ChatEngine} from "react-chat-engine"

import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"

import "./App.css"

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height = "100vh"
            projectID="8e0b9567-4d78-49e5-aeef-69701c2c446d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App