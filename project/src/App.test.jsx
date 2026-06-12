import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";

import App from "./App";

test(
  "user can add furniture item to cart",
  () => {
    render(<App />);

    const button =
      screen.getAllByText(
        "Add To Cart"
      )[0];

    fireEvent.click(button);

    expect(
      screen.getByText(
        /Cart \(1\)/i
      )
    ).toBeInTheDocument();
  }
);