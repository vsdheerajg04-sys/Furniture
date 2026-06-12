import {
  render,
  screen,
} from "@testing-library/react";

import ProductCard from "./ProductCard";
import { CartProvider } from "./CartContext";

test(
  "renders furniture name",
  () => {
    render(
      <CartProvider>
        <ProductCard
          product={{
            id: 1,
            name: "Wooden Sofa Set",
            price: 25000,
            category: "Sofas",
            material: "Teak Wood",
          }}
        />
      </CartProvider>
    );

    expect(
      screen.getByText(
        "Wooden Sofa Set"
      )
    ).toBeInTheDocument();
  }
);