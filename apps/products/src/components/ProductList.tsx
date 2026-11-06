interface Product {
  id: number;
  title: string;
  price: number;
}

const products: Product[] = [
  { id: 1, title: "iPhone 17", price: 1200 },
  { id: 2, title: "MacBook Pro", price: 2500 },
  { id: 3, title: "AirPods Pro", price: 250 },
];

function ProductList() {
  return (
    <section>
      <h2>Products</h2>

      {products.map((product) => (
        <article key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </article>
      ))}
    </section>
  );
}

export default ProductList;