package com.ecommerce.service;

import com.ecommerce.modal.Product;
import com.ecommerce.modal.User;
import com.ecommerce.modal.Wishlist;

public interface WishlistService {

    Wishlist createWishlist(User user);
    Wishlist getWishlistByUserId(User user);
    Wishlist addProductToWishlist(User user, Product product);
}
