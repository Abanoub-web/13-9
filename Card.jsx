import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import WishlistContext from '../WishlistContext (1)';


function CardComponent ({product}){
  const { addCart } = useContext(CartContext);
  const { addWishlist } = useContext(WishlistContext);

return(

<>

<Container >
    
<Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {product.name} </Card.Title>
        <Card.Text>
        {product.description} -{product.price}EGP
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => { addCart(product);
          }}
        >
          Add to cart
        </Button>
        <Button
          variant="primary"
          onClick={() => { addWishlist(product);
          }}
        >
          Add to wishlist
        </Button>
      </Card.Body>
    </Card>
    </Container>

</>



)





}
export default CardComponent;