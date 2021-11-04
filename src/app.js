import { ChatEngine } from 'react-chat-engine';

import ChatFeed from "./components/ChatFeed";

import './app.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="dd636b30-aa8d-410a-990b-c0f444fd6df8"
            userName="joste"
            userSecret="Danniella@27"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;