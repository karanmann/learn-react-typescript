import {useState} from 'react'

type LoggedInProps = {}

const LoggedIn = (props: LoggedInProps) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</div>
    </div>
  )
}

export default LoggedIn