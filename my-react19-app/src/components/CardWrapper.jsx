function CardWrapper({title, children}){
  return(
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default CardWrapper;
