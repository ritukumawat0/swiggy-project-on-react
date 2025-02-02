import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListData.json";
import "@testing-library/jest-dom";
import RestaurantList from "../RestaurantList";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should filter top Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const searchBtn = screen.getByText("Top Rated Restaurnats");

  fireEvent.click(searchBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(15);
});

test("should filter resturants based on search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  await act(async () => {
    fireEvent.change(searchInput, { target: { value: "pizza" } });
  });

  await act(async () => {
    fireEvent.click(searchBtn);
  });

  let cardsAfterFilter;
  await act(async () => {
    cardsAfterFilter = screen.getAllByTestId("resCard");
  });

  expect(cardsAfterFilter.length).toBe(4);
});
