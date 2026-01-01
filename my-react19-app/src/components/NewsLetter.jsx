import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {

  const handleSubscribe = () => {
    alert("Thanks for subscribing!");
  }

  return(
    <div>
      <h2>Subscribe to NewsLetter</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  )
}
