import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../CartContext';



// function DinoCard(props){
//     const product = props.product
//     const cart = useContext(CartContext)
//     const productQuantity = cart.getProductQuantity(product.id)
//     console.log(cart.items);

export default function DinoCard(props){
    const { addOneToCart, removeOneFromCart, deleteFromCart, productQuantity } = useContext(CartContext)
    const { toy } = props
    return(
        <Card id='card'>
            <div key={toy.id}></div>
            <Card.Body>
                <Card.Img src={toy.Image} />
                <Card.Title>{toy.Name}</Card.Title>
                <Card.Text>{toy.Type}</Card.Text>
                <Card.Text>${toy.Price}</Card.Text>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => addOneToCart(toy.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => removeOneFromCart(toy.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => deleteFromCart(toy.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={()=> addOneToCart(toy.id)}>Add To Cart</Button>}
            </Card.Body>
        </Card>
        )
}