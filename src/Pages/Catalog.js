import DinoCard from "../Components/DinoCard"

const urlEndpoint = 'http://localhost:5001/all';

const Catalog = () =>{
    return (
		<div>
			<h1 className="catalog">Shop</h1>
            <DinoCard></DinoCard>
		</div>
    )
}

export default Catalog