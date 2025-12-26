export const UserList = () => {
  const names = ["Clark", "James", "Jerry"]
  const nameComponent = names.map((name, index) => <li key={index}>{name}</li>)

  return(
    <div><ul>{nameComponent}</ul></div>
  )
}
