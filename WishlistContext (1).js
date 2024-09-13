import { createContext } from 'react';

const WishlistContext = createContext({
    wishlist: [],
    addWishlist: () => {},
    removeFromWishlist: () => {},  
});

export default WishlistContext;
