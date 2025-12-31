export const CustomButton = ({text, buttonClass}) => {
  const name = "James"
  const handleClick = () => {
    console.log(`Hello ${name}, Thanks for ${text}!`);
  }

  return <button onClick={handleClick} className={buttonClass}>{text}</button>
}
