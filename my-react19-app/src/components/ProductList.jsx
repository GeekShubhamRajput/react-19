export const ProductList = () => {
  const products = [
    {id: 1, name: 'Laptop', price: 999},
    {id: 2, name: 'Mobile', price: 666},
    {id: 3, name: 'Charger', price: 99}
  ]

  const ProductDetail = products.map((product) => {
          return(
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          )
        })

  return(
    <div>
      <h2>Our Products</h2>
      {ProductDetail}
    </div>
  )    
}
