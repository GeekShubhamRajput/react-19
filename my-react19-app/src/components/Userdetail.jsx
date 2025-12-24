export const UserDetail = ({name, isOnline}) => {
  return(
    <div>
      <h3>{name}</h3>
      <span>{isOnline ? '🟢 Online' : 'Offline' }</span>
      <p>{isOnline ? 'Available for chat' : 'Not available for chat' }</p>
      { 
        isOnline ? 
          (<button>Send message</button>) : <p>Check back later</p>
      }   
    </div>
  )   
}
