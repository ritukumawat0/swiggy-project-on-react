import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";

test("should load Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const loginBtn = screen.getByText("Login");

  //assertion
  expect(loginBtn).toBeInTheDocument();
});

test("should cart items are in Header or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const cartItems = screen.getByText(/cart/i); // /cart/i -> case insensitive and /cart/ is case sensitive

  //assertion
  expect(cartItems).toBeInTheDocument();
});

test("should change Login button to Logout onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser:"Tech Queen" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByText("Login");

  fireEvent.click(loginBtn); 

  expect(screen.getByText("Tech Queen")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Tech Queen"));

  expect(loginBtn).toBeInTheDocument();
});

test("should change online to offline on internet off",()=>{
    render(
        <BrowserRouter>
           <Provider store={appStore}>
              <Header/>
           </Provider>
        </BrowserRouter>
    )

    const online = screen.getByText("Online 🟢");

    fireEvent(window, new Event("offline"));

    expect(screen.getByText("Offline 🔴")).toBeInTheDocument();

    fireEvent(window, new Event("online"));

    expect(screen.getByText("Online 🟢")).toBeInTheDocument();
})


