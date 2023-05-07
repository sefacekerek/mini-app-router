import React from 'react'
import { useParams } from 'react-router-dom'

export default function MemberDetail() {
    const params = useParams()
   const memberId =  params.memberId
  return (
    <div>member id = {memberId}</div>
  )
}
