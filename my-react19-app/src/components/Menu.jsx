import { MenuItem } from "./MenuItem"

export const Menu = () => {

  const handleOrder = (itemName, itemPrice) => {
    alert(`You ordered: ${itemName} for $${itemPrice}`);
  }

  return(
    <div>
      <h2>Our Menu</h2>
      <MenuItem itemName="Pizza" itemPrice={12} onOrder={handleOrder} />
      <MenuItem itemName="Burger" itemPrice={10} onOrder={handleOrder} />
      <MenuItem itemName="Salad" itemPrice={5} onOrder={handleOrder} />
    </div>
  )
}
