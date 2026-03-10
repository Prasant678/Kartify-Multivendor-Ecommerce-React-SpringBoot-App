package com.ecommerce.repository;

import com.ecommerce.modal.Cart;
import com.ecommerce.modal.CartItem;
import com.ecommerce.modal.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    CartItem findByCartAndProductAndSize(Cart cart, Product product, String size);
}
