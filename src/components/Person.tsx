import React from 'react'

type PersonProps = {
    firstName:string,
    lastName:string
}

const Person = (props: PersonProps) => {
    const{firstName, lastName} = props
  return (
    <div>{firstName} {lastName}</div>
  )
}

export default Person