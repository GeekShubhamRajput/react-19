import { MenuItem } from "./MenuItem"
import { Order } from "./Order"
import { useState } from "react"

export const Menu = () => {
  const [total, setTotal] = useState(0)

  const handleOrder = (itemName, itemPrice) => {
    setTotal(total + itemPrice)
  }

  return(
    <div>
      <h2>Our Menu</h2>
      <MenuItem itemName="Pizza" itemPrice={12} onOrder={handleOrder} />
      <MenuItem itemName="Burger" itemPrice={10} onOrder={handleOrder} />
      <MenuItem itemName="Salad" itemPrice={5} onOrder={handleOrder} />
      <Order total={total} />
    </div>
  )
}
