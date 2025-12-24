export const UserDetail = ({name, isOnline, isPremium, isNewUser}) => {
  return(
    <div>
      <h3>{name} {isPremium && <span>⭐</span>} {isNewUser && <span>🎉</span>}</h3>
      <span>{isOnline ? '🟢 Online' : 'Offline' }</span>
      <p>{isOnline ? 'Available for chat' : 'Not available for chat' }</p>
      { 
        isOnline ? 
          (<button>Send message</button>) : <p>Check back later</p>
      }   
    </div>
  )   
}
