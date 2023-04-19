import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar"; 

const GlobalLayout = () => {
	return (
		<div>
		<route>
			<NavBar/>
			<Outlet/>
		</route>
		</div>
	)
}

export default GlobalLayout