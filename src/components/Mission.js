import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mission() {
    const navigate = useNavigate()
  return (
    <div><p>Mission</p>
    <button onClick={()=>navigate("/")}>Return home page</button></div>
  )
}
