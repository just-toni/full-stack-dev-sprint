import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Brand from "./pages/Brand";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { TasksProvider } from "./context/TasksContext";
// import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/brand",
    element: <Brand/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/cart",
    element: <Cart/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksProvider>
      <RouterProvider router={router} />
    </TasksProvider>
  </React.StrictMode>
);
