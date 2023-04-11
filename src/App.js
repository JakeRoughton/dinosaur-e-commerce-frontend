import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
import HomePage from "./Pages/HomePage";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Catalog from "./Pages/Catalog";
import Videos from "./Pages/Videos";
import ProductDetails from "./Pages/ProductDetails";
import ShoppingCart from "./Pages/ShoppingCart";
import Contact from "./Pages/Contact";
import './App.css';

function App() {
  const router = createBrowserRouter ([
   {
   	path: "/",
      element:<GlobalLayout/>,
      children:[
		{
			index: true,
			element: <HomePage />
		},
		{
			path: "Registration",
			element: <Registration />
		},
		{
			path: "Login",
			element: <Login />
		},
		{
			path: "Catalog",
			element: <Catalog />
		},
		{
			path: "Videos",
			element: <Videos />
		},
		{
			path: "ProductDetails",
			element: <ProductDetails />
		},
		{
			path: "Contact",
			element: <Contact />		
		},
		{
			path: "ShoppingCart",
			element: <ShoppingCart />
		},
        
      ],
   },
	]);

     return (
		<div className="App-header">
			<RouterProvider router={router}/>
		</div>
	)
};

export default App;
