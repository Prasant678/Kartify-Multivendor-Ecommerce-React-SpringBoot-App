package com.ecommerce.service.impl;

import com.ecommerce.modal.Cart;
import com.ecommerce.modal.Coupon;
import com.ecommerce.modal.User;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.repository.CouponRepository;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.service.CouponService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {

    private final CouponRepository couponRepository;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;

    @Override
    public Cart applyCoupon(String code, double orderValue, User user) throws Exception {
        Coupon coupon = couponRepository.findByCode(code);

        Cart cart = cartRepository.findByUserId(user.getId());
        if (coupon == null){
            throw new Exception("Coupon not Valid..");
        }
        if (user.getUsedCoupons().contains(coupon)){
            throw new Exception("Coupon Already used");
        }
        if (orderValue < coupon.getMinimumOrderValue()) {
            throw new Exception("Valid For Minimum Order Value " + coupon.getMinimumOrderValue());
        }
        if (coupon.isActive() && LocalDate.now().isAfter(coupon.getValidityStartDate())
                && LocalDate.now().isBefore(coupon.getValidityEndDate())){
            user.getUsedCoupons().add(coupon);
            userRepository.save(user);

            double discountPrice = (cart.getTotalSellingPrice() * coupon.getDiscountPercentage()) / 100;
            cart.setTotalSellingPrice(cart.getTotalSellingPrice() - discountPrice);
            cart.setCouponCode(code);
            cartRepository.save(cart);
            return cart;
        }
        throw new Exception("Coupon not Valid.");
    }

    @Override
    public Cart removeCoupon(String code, User user) throws Exception {
        Coupon coupon = couponRepository.findByCode(code);
        if (coupon == null){
            throw new Exception("Coupon not Valid..");
        }

        Cart cart = cartRepository.findByUserId(user.getId());
        double discountPrice = (cart.getTotalSellingPrice() * coupon.getDiscountPercentage()) / 100;
        cart.setTotalSellingPrice(cart.getTotalSellingPrice() + discountPrice);
        cart.setCouponCode(null);
        return cartRepository.save(cart);
    }

    @Override
    public Coupon findCouponById(Long id) throws Exception {
        return couponRepository.findById(id).orElseThrow(()->
                new Exception("Coupon not Found."));
    }

    @Override
    @PreAuthorize("hasRole ('ADMIN')")
    public Coupon createCoupon(Coupon coupon) {
        return couponRepository.save(coupon);
    }

    @Override
    public List<Coupon> findAllCoupons() {
        return couponRepository.findAll();
    }

    @Override
    @PreAuthorize("hasRole ('ADMIN')")
    public void deleteCoupon(Long id) throws Exception {
        findCouponById(id);
        couponRepository.deleteById(id);
    }
}
