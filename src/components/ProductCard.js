import { Card, Button, Form, Row, Col } from 'react-bootstrap'

function ProductCard(props) { //props.product is the product we are selling
    const product = props.product

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Rs.{product.price}</Card.Text>
                <Button variant='primary'>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard