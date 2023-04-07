import { useState } from "react"

export function TwitterFollowCard ({children,userName,name,initialIsFollowing}) {
     const [isFollowing,setIsFollowing]=useState(false)

    const handClick=()=>{
        setIsFollowing(!isFollowing)
    }
    const imageSrc=`https://unavatar.io/github/${userName}`
    console.log(isFollowing, userName,name,children)
    let name_rec=""
    const text_boton=isFollowing?'Siguiendo':'seguir'
    const buttonClassName=isFollowing?'tw-followCard-button siguiendo':'tw-followCard-button'
    
    name===undefined?name_rec=children:name_rec=name

   
    return(
        <article className="tw-followCard"/*style={{display:'flex', alignItems: 'center', color: '#fff'}}*/ >
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar"
                    alt="El avatar 1" src={imageSrc}
                />
                <div className="tw-followCard-info">
                    <strong>
                        {name_rec}
                    </strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>                    
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handClick}>
                    <span className="tw-followCard-text">{text_boton}</span>
                    <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
        )
}
