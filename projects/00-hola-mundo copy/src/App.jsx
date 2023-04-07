import  "./App.css"
import { TwitterFollowCard } from "./TwitteFollowCard"

export function App () {
    const addAt=(userName)=>`@${userName}`
   const users=[
    {userName:'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
    },
    {userName:'atrefing',
    name: 'Alonso Trejo',
    isFollowing: true
    },
    {userName:'phralb',
    name: 'Pablo H',
    isFollowing: false
    },
    {userName:'PacoHdezs',
    name: 'Paco Hernandez',
    isFollowing: true
    },
    {userName:'TMChein',
    name: 'Tomas',
    isFollowing: false
    }
   ]
    return (
        <section className="App">
            {
                users.map( ({userName,name,isFollowing}) => {                   
                    return(<TwitterFollowCard 
                        key={userName}                        
                        userName={userName}
                        initialIsFollowing= {isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>)
                })
            }        
        </section>
    )
}