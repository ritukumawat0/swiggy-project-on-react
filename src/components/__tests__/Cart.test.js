import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../mocks/resMenudata.json";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load Restaurant menu component", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accHeader = screen.getByText("Sweets (52)");

  fireEvent.click(accHeader);

  const accBody = screen.getAllByTestId("itemsId");

  expect(accBody.length).toBe(52);
});

test("should count carts data on header onclick on add +", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accHeader = screen.getByText("Feeni (2)");

  fireEvent.click(accHeader);

  const accBody = screen.getAllByTestId("itemsId");

  const addBtn = screen.getAllByText("Add +");

  fireEvent.click(addBtn[0]);

  const cartCount = screen.getByText("Cart (1 items)");

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
});

test("should count carts data in Cart Component", async () => {
    await act(() => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart/>
          </Provider>
        </BrowserRouter>
      );
    });
  
    const accHeader = screen.getByText("Feeni (2)");
  
    fireEvent.click(accHeader);
  
    const accBody = screen.getAllByTestId("itemsId");
  
    const addBtn = screen.getAllByText("Add +");
  
    fireEvent.click(addBtn[0]);
  
    const cartCount = screen.getByText("Cart (3 items)");
  
    expect(screen.getAllByTestId("itemsId").length).toBe(5);

    const clearCartBtn = screen.getByText("Clear Cart");

    fireEvent.click(clearCartBtn);

    expect(screen.getAllByTestId("itemsId").length).toBe(2);
  });
