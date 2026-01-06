import { useState } from "react"

export const UserProfile = () => {
  const [user, setUser] = useState({name: "John lara", age: 30, email: 'jojo@gmail.com',
     address: {city: 'Indore', country: 'India'}})
  
  const updateName = () => {
    setUser({...user, name: "James Franklin"})
  }

  const updateAge = () => {
    setUser({...user, age: 35})
  }

  const updateEmail = () => {
    setUser({...user, email: 'James@gmail.com'})
  }

  const updateCity = () => {
    setUser({...user, address: {...user.address, city: 'Pune' }})
  }

  const updateCountry = () => {
    setUser({...user, address: {...user.address, country: 'USA' }})
  }

  return(
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Country: {user.address.country}</p>
      <button onClick={updateName}>Change user Name</button>
      <button onClick={updateAge}>Change user Age</button>
      <button onClick={updateEmail}>Change user Email</button>
      <button onClick={updateCity}>Change user City</button>
      <button onClick={updateCountry}>Change user Country</button>
    </div>
  )
}
