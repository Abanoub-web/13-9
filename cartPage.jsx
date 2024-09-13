import { useContext } from "react";
import { CartContext } from "../CartContext";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function CartPage(productList) {
const { cart, addCart, removeFromCart} = useContext(CartContext);
return (
  <>
<Container className="my-5">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product, idx) => (
                        <li key={idx}>
                            <h5>{product.name}</h5>
                            <p>{product.description} - ${product.price}</p>
                            <p>Quantity: {product.qty}</p> 
                            <Button variant="success" onClick={() => addCart(product)}>Add More</Button> 
                            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Button> 
                        </li>
                    ))}
                </ul>
            )}
        </Container>
    </>
  );
}
export default CartPage;
