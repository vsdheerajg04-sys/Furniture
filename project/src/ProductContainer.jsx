import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "./products";
import SearchBar from "./SearchBar";
import { CartContext } from "./CartContext";

function ProductContainer() {
  const [searchTerm, setSearchTerm] = useState("");

  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* SEARCH BAR */}
      <div style={{ padding: "20px" }}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {/* FURNITURE PRODUCTS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "250px",
              borderRadius: "8px",
            }}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                width="100%"
                style={{
                  height: "180px",
                  objectFit: "cover",
                }}
              />
            </Link>

            <h3>{product.name}</h3>

            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {product.category}
            </p>

            {product.material && (
              <p>
                <strong>Material:</strong>{" "}
                {product.material}
              </p>
            )}

            <button
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;