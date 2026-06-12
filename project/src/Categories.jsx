import { Link, Outlet } from "react-router-dom";

export function Sofas() {
  return (
    <div>
      <h3>Sofas</h3>
      <ul>
        <li>Wooden Sofa Set - ₹25,000</li>
        <li>L-Shaped Sofa - ₹45,000</li>
        <li>Luxury Recliner Sofa - ₹60,000</li>
      </ul>
    </div>
  );
}

export function Chairs() {
  return (
    <div>
      <h3>Chairs</h3>
      <ul>
        <li>Office Chair - ₹8,500</li>
        <li>Dining Chair - ₹3,500</li>
        <li>Rocking Chair - ₹7,000</li>
      </ul>
    </div>
  );
}

export function Tables() {
  return (
    <div>
      <h3>Tables</h3>
      <ul>
        <li>Dining Table - ₹18,000</li>
        <li>Coffee Table - ₹6,500</li>
        <li>Study Table - ₹9,000</li>
      </ul>
    </div>
  );
}

export function Beds() {
  return (
    <div>
      <h3>Beds</h3>
      <ul>
        <li>Queen Size Bed - ₹30,000</li>
        <li>King Size Bed - ₹42,000</li>
        <li>Storage Bed - ₹38,000</li>
      </ul>
    </div>
  );
}

export function Wardrobes() {
  return (
    <div>
      <h3>Wardrobes</h3>
      <ul>
        <li>2-Door Wardrobe - ₹15,000</li>
        <li>3-Door Wardrobe - ₹22,000</li>
        <li>Sliding Wardrobe - ₹35,000</li>
      </ul>
    </div>
  );
}

export function DiningSets() {
  return (
    <div>
      <h3>Dining Sets</h3>
      <ul>
        <li>4-Seater Dining Set - ₹20,000</li>
        <li>6-Seater Dining Set - ₹35,000</li>
        <li>8-Seater Dining Set - ₹50,000</li>
      </ul>
    </div>
  );
}

export function OfficeFurniture() {
  return (
    <div>
      <h3>Office Furniture</h3>
      <ul>
        <li>Office Desk - ₹12,000</li>
        <li>Executive Chair - ₹15,000</li>
        <li>Bookshelf - ₹8,000</li>
      </ul>
    </div>
  );
}

function Categories() {
  return (
    <div>
      <h2>Furniture Categories</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <Link to="sofas">Sofas</Link>

        <Link to="chairs">Chairs</Link>

        <Link to="tables">Tables</Link>

        <Link to="beds">Beds</Link>

        <Link to="wardrobes">Wardrobes</Link>

        <Link to="diningsets">Dining Sets</Link>

        <Link to="officefurniture">
          Office Furniture
        </Link>
      </div>

      <hr />

      <Outlet />
    </div>
  );
}

export default Categories;