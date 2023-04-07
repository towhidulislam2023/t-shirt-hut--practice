import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Order from './Components/Order/Order';
import OrderReview from './Components/OrderReview/OrderReview';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/shop",
        element:<Shop></Shop>,
        loader: () => fetch('tshirt.json')
      },
      {
        path:"/order",
        element:<Order></Order>
      },
      {
        path:"/review",
        element: <OrderReview></OrderReview>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
