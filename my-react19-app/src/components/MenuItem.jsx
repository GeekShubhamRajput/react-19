export const MenuItem = ({itemName, itemPrice, onOrder}) => {
  return(
    <div>
      <span>{itemName} - ${itemPrice}</span>
      <button onClick={() => onOrder(itemName, itemPrice)}>Order</button>
      <hr />
    </div>
  ) 
}
