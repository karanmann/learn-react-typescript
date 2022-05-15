import React from 'react'

type nameListProps = {
  names:{
    first: string,
    last: string
  }[]
}

const PersonsList = (props: nameListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
          <p>{name.first} {name.last}</p>
        )
      })}
    </div>
  )
}

export default PersonsList