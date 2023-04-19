import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
import HomePage from "./Pages/HomePage";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Catalog from "./Pages/Catalog";
import Videos from "./Pages/Videos";
import Contact from "./Pages/Contact";
import Cancel from "./Pages/Cancel";
import Success from "./Pages/Success";
import PrivatePage from "./Pages/PrivatePage";
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
			path: "success",
			element: <Success />
		},
		{
			path: "cancel",
			element: <Cancel />
		},
		{
			path: "Videos",
			element: <Videos />
		},
		{
			path: "Contact",
			element: <Contact />		
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
