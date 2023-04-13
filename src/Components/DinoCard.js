import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react'

function DinoCard(props){
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items);

    return(
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={()=> cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default DinoCard




// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // import { useNavigate } from 'react-router-dom'
// import { Card } from 'react-bootstrap'

// const urlEndpoint = 'http://localhost:5001/dinos';

// export default function DinoCard() {
//     const [dinos, setDinos] = useState([]);
//     // const navigate = useNavigate()

//     useEffect(() => {
//         axios.get(`${urlEndpoint}/all`).then((response) => {
//             setDinos(response.data.dinos);
//         });
//     }, []);

//     return (

//         <div className='dinoCard'>
//           {dinos.map((dino) => (
//             <div key={dino.id}>
//             <Card style={{ width: '18rem' }}>
//             <Card.Body>
//             <Card.Title className="cardTitle">{dino.name}</Card.Title>
//             <Card.Text className="cardText">{dino.maker}</Card.Text>
//             </Card.Body>
//             </Card>
//                 </div>
//             ))}
//         </div>
//     );
// };