import { useEffect, useState } from "react"



const FollowMouse=()=>{
  const [enabled,setEnabled]=useState(false)
  const [pos,setPos]=useState({x:0,y:0})
  
  useEffect(()=>{
    
    console.log('Efecto',{enabled})
    const handleMove=()=>{
      const {x,y}=event
      console.log('handleMove', {x,y})
      setPos({x,y})
    }
    if(enabled)
      window.addEventListener('pointermove',handleMove)

    return ()=>{ 
      console.log('Clean Up')
      window.removeEventListener('pointermove', handleMove)
      setPos({x:0,y:0})
    }
  },[enabled])

return(
      <>
      <div style={{
        position:'absolute',
        border: '1px solid #fff',
        backgroundColor:'#09f',
        borderRadius:'50%',
        opacity:0.8,
        pointerEvents:'none',
        left: -20,
        top:-20,
        width:40,
        height:40,
        //transform: 'translate(0px,0px)'
        transform: `translate(${pos.x}px,${pos.y}px)`

      }}
      ></div>
      <button onClick={()=>setEnabled(!enabled)}>{enabled?'Desactivar':'Activar'} seguir Puntero</button>
      </>
)
}



function App() {
  const [mounted,setMounted]=useState(true)

return(  
  <main>
  {mounted && <FollowMouse></FollowMouse>}
  <button onClick={()=>setMounted(!mounted)}>
    Seguimiento FollowMouse Component
  </button>
  </main>
)
  
}

export default App
