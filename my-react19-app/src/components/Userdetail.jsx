export const UserDetail = ({name, isOnline, isPremium, isNewUser, role}) => {
  let roleBadge = null;
  if (role === "admin"){
    roleBadge = <span>🛠️ Admin</span>;
  }else if (role === "vip"){
    roleBadge = <span>💎 VIP</span>;
  }

  return(
    <div>
      <h3>{name} {isPremium && <span>⭐</span>} {isNewUser && <span>🎉</span>} {roleBadge}</h3>
      <span>{isOnline ? '🟢 Online' : 'Offline' }</span>
      <p>{isOnline ? 'Available for chat' : 'Not available for chat' }</p>
      { 
        isOnline ? 
          (<button>Send message</button>) : <p>Check back later</p>
      }   
    </div>
  )   
}
