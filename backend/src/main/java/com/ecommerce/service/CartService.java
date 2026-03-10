package com.ecommerce.service;

import com.ecommerce.modal.Cart;
import com.ecommerce.modal.CartItem;
import com.ecommerce.modal.Product;
import com.ecommerce.modal.User;

public interface CartService {

    public CartItem addCartItem(
            User user,
            Product product,
            String size,
            int quantity
    );

    public Cart findUserCart(User user);
}
