import { useContext } from "react";
import WishlistContext from "../WishlistContext (1)";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function WishlistPage() {
    const { wishlist, addwishlist, removeFromWishlist } = useContext(WishlistContext);

    return (
        <>
        <Container className="my-5">
            <h2>Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty</p>
            ) : (
                <ul>
                    {wishlist.map((product, idx) => (
                        <li key={idx}>
                            <h5>{product.name}</h5>
                            <p>{product.description} - ${product.price}</p>
                            <Button variant="success" onClick={() => addwishlist(product)}>Add More</Button> 

                            <Button variant="danger" onClick={() => removeFromWishlist(product.id)}>Remove from Wishlist</Button> 
                        </li>
                    ))}
                </ul>
            )}
        </Container>
        </>
    );
}

export default WishlistPage;
