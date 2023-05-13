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
import Employer from "./Pages/Employer";
import Individual from "./Pages/Individual";
import ResourceCenter from "./Pages/ResourceCenter";
import Testimonials from "./Pages/Testimonials";
import About from "./Pages/About";
import Privacy from "./Pages/Privacy";
import Security from "./Pages/Security";
import Cookie from "./Pages/Cookie-Declaration";
import Footer from "./Components/Footer";

import './App.css';
import Terms from "./Pages/Terms";

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
			path: "Videos",
			element: <Videos />
		},
		{
			path: "Contact",
			element: <Contact />		
		},
		{
			path: "Employer",
			element: <Employer />
		},
		{
			path: "Individual",
			element: <Individual />
		},		
		{
			path: "ResourceCenter",
			element: <ResourceCenter />
		},		
		{
			path: "Testimonials",
			element: <Testimonials />
		},
		{
			path: "About",
			element: <About />
		},
		{
			path: "Terms",
			element: <Terms />
		},
		{
			path: "Privacy",
			element: <Privacy />
		},
		{
			path: "Security",
			element: <Security />
		},
		{
			path: "Cookie",
			element: <Cookie />
		},
		{
			path: "Catalog",
			element: <PrivatePage />,
			children: [{
				index: true,
				element:<Catalog/>
			},{
				path: "success",
				element: <Success />
			},
			{
				path: "cancel",
				element: <Cancel />
			},
]
		},
		
        
      ],
   },
	]);

     return (
		<div className="App-header">
			<RouterProvider router={router}/>
			<Footer />
		</div>
	)
};

export default App;
