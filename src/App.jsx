import React from "react"
export default function App(){
  return(
    <div style={{fontFamily:"Arial"}}>
      <header style={{background:"#0B3B66",padding:"20px",color:"white",display:"flex",alignItems:"center",gap:"15px"}}>
        <img src="/logo.png" height="60"/>
        <h1>Bluegrass Holiday Lights</h1>
      </header>
      <section style={{background:"url('/hero-bg.jpg') center/cover",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",textShadow:"0 0 8px black",fontSize:"32px"}}>
        Professional Holiday Light Installations
      </section>
      <section style={{padding:"40px"}}>
        <h2>Before & After</h2>
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
          <img src="/before1.jpg" width="45%"/>
          <img src="/after1.jpg" width="45%"/>
          <img src="/before2.jpg" width="45%"/>
          <img src="/after2.jpg" width="45%"/>
        </div>
      </section>
    </div>
  )
}
