function Product({name, price, isAvailable, categories}){
  return(
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>In stock: {isAvailable ? "Yes" : "No"}</p>
      <p>Category: {categories.join(", ")}</p>
    </div>
  )
}

export default Product;
