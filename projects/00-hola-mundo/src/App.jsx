import  "./App.css"
import { TwitterFollowCard } from "./TwitteFollowCard"

export function App () {
    const addAt=(userName)=>`@${userName}`
   
    return (
        <section className="App">
            <TwitterFollowCard  addAt={addAt} userName="unknown" name="create value"/>
            <TwitterFollowCard  addAt={addAt} userName="atrefing">
                freeCodeCamp
            </TwitterFollowCard>
            <TwitterFollowCard  addAt={addAt} userName="heleon" name="chatGPT Developer"/>
            <TwitterFollowCard  addAt={addAt} userName="daniel" name="chatGPT Auto-GPT Developer"/>
            <TwitterFollowCard  addAt={addAt} userName="protos" name="ts-node"/>
        </section>
    )
}