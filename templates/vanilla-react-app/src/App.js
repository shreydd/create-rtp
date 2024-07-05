import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";

const AppLayout = () => {
  return (
      <Outlet />
  );
};

const Error = () => {
    return(
        <div className="text-center text-xl">Something went wrong</div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
