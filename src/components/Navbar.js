import { useState, useContext } from 'react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    return (
        <>
            <Navbar>
                <Navbar.Brand>Shopping Cart</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cart {productCount} Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        productCount > 0 ?
                            <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, index) => (
                                <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant='success'>Purchase items</Button>
                            </>
                            :
                            <h1>Nothing in your cart</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )

}

export default NavbarComponent;