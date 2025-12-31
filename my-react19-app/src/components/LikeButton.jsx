export const LikeBotton = () => {
  
  const handleClick = () => {
    alert("Thanks for liking!")
  }

  return <button onClick={handleClick} style={{backgroundColor: "blue"}}>Likes</button>
}
