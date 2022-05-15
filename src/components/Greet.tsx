import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
  return (
      <div>
          {props.isLoggedIn ? `<div>Welcome ${props.name}! You have ${props.messageCount} unread messages</div>` : 'Not Logged in!'}
      </div>
  )
}

export default Greet