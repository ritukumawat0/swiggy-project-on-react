import React, { lazy, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineState from "./utils/useOnlineState";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));

const App = () => {
  const online = useOnlineState();
  const{loggedInUser} = useContext(UserContext);
  if (online == false) {
    alert("you are offline please check your internet connection");
  }
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser}}>
        <Header />
        <UserContext.Provider value={{loggedInUser:"Tech Queen"}}>
        <Outlet />
      </UserContext.Provider>
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
