import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          width="200"
          height="150"
        />
      )}

      <h3>{product.name}</h3>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      {product.material && (
        <p>
          <strong>Material:</strong> {product.material}
        </p>
      )}

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;