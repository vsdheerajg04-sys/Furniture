import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import {
  useState,
  useEffect,
  useContext,
} from "react";

import ProductContainer from "./ProductContainer";

import Categories, {
  Sofas,
  Chairs,
  Tables,
  Beds,
  Wardrobes,
  DiningSets,
  OfficeFurniture,
} from "./Categories";

import products from "./products";
import { CartContext } from "./CartContext";
import ProtectedRoute from "./ProtectedRoute";

/* =========================
   PRODUCT DETAILS PAGE
========================= */
function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  const { cart, setCart } =
    useContext(CartContext);

  if (!product) {
    return <h2>Furniture Not Found</h2>;
  }

  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      <img
        src={product.image}
        alt={product.name}
        width="350"
      />

      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>

      {product.material && (
        <p>
          Material: {product.material}
        </p>
      )}

      <button onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

/* =========================
   HOME PAGE
========================= */
function Home() {
  return <ProductContainer />;
}

/* =========================
   LOGIN PAGE
========================= */
function Login() {
  const [name, setName] =
    useState("");
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password
    ) {
      alert(
        "All fields are required"
      );
      return;
    }

    localStorage.setItem(
      "user",
      name
    );

    alert("Login Successful");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

/* =========================
   CHECKOUT PAGE
========================= */
function Checkout() {
  return (
    <h2 style={{ padding: "20px" }}>
      Furniture Order Placed
      Successfully 🎉
    </h2>
  );
}

/* =========================
   NAVBAR
========================= */
function Navbar() {
  const { cart } =
    useContext(CartContext);

  return (
    <nav
      style={{
        display: "flex",
        gap: "15px",
        padding: "10px",
        borderBottom:
          "1px solid #ddd",
      }}
    >
      <Link to="/">Home</Link>

      <Link to="/categories">
        Furniture Categories
      </Link>

      <Link to="/login">
        Login
      </Link>

      <Link to="/checkout">
        Checkout
      </Link>

      <span>
        🛒 Cart ({cart.length})
      </span>
    </nav>
  );
}

/* =========================
   APP COMPONENT
========================= */
function App() {
  const { cart } =
    useContext(CartContext);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const total = cart.reduce(
    (sum, item) =>
      sum + Number(item.price),
    0
  );

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails />
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/categories"
          element={<Categories />}
        >
          <Route
            path="sofas"
            element={<Sofas />}
          />

          <Route
            path="chairs"
            element={<Chairs />}
          />

          <Route
            path="tables"
            element={<Tables />}
          />

          <Route
            path="beds"
            element={<Beds />}
          />

          <Route
            path="wardrobes"
            element={<Wardrobes />}
          />

          <Route
            path="diningsets"
            element={<DiningSets />}
          />

          <Route
            path="officefurniture"
            element={
              <OfficeFurniture />
            }
          />
        </Route>
      </Routes>

      <hr />

      <h3 style={{ padding: "10px" }}>
        Cart Total: ₹{total}
      </h3>
    </BrowserRouter>
  );
}

export default App;