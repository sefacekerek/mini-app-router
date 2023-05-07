import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <p>Home</p>
        <button onClick={()=>navigate("/mission")}>Go to mission</button>
    </div>
  )
}
