import { Row, Col, NavItem } from 'react-bootstrap'
import { productArray } from '../productStore';
import ProductCard from '../components/ProductCard';

function Store() {
    return (
        <>
            <h1 align="center" className='p-4'>Welcome to the Store</h1>
            <Row xs={1} md={3} className='g-4'>
                {productArray.map((product, index) => (
                    <Col align='center' key={index}>
                        <ProductCard product={product} />
                    </Col>)
                )}
            </Row>
        </>
    )
}

export default Store;