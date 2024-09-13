import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import ProductCard from "../component/Card";
import CardComponent from '../component/Card';

const productList = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    
    description: "Product 1 description",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    description: "Product 2 description",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3000,
    description: "Product 3 description",
  },
  {
    id: 4,
    name: "Product 4",
    price: 4000,
    description: "Product 4 description",
  },
  {
    id: 5,
    name: "Product 5",
    price: 5000,
    description: "Product 5 description",
  },
];
function ProductList() {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {productList.map((item, idx) => (
          <Col key={idx}>
            <CardComponent product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;