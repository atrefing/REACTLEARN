import { useState } from "react"

export function TwitterFollowCard ({children,addAt,userName,name}) {
     const [isFollowing,setIsFollowing]=useState(false)

    const handClick=()=>{
        setIsFollowing(!isFollowing)
    }
    const imageSrc=`https://unavatar.io/github/${userName}`
    console.log(isFollowing, userName,name,children)
    let name_rec=""
    const text_boton=isFollowing?'Siguiendo':'seguir'
    const buttonClassName=isFollowing?'tw-followCard-button siguiendo':'tw-followCard-button'
    
    name_rec=undefined? name_rec =children:name_rec=name

   
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
                    <span className="tw-followCard-infoUserName">{addAt(userName)}</span>                    
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handClick}>
                    {text_boton}
                </button>
            </aside>
        </article>
        )
}
