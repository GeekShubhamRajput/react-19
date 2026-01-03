import { useState } from "react"

export const LoggedInCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoggedIn = () =>{
    setIsLoggedIn(!isLoggedIn)
  }

  return <div><button onClick={handleLoggedIn}>{isLoggedIn ? "LogOut" : "LogIn"} </button></div>
}
