import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </>
  );
}

export default ProductList;