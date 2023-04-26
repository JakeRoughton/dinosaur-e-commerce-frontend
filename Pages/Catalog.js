import { Row, Col } from 'react-bootstrap';
import { productsArray } from './ProductStore';
import { useEffect } from "react"
import DinoCard from '../Components/DinoCard';
import Footer from "../Components/Footer";

const urlEndpoint = 'http://localhost:5001/all';

const Catalog = () =>{
    return (
		<div>
			<h1 align="center" className="catalog p-3">Shop</h1>
            <br/>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx)=>(
                <Col align="center" key={idx}>
                    <DinoCard product={product}/>
                </Col>
                ))}
            </Row>
		</div>
    )
}

export default Catalog