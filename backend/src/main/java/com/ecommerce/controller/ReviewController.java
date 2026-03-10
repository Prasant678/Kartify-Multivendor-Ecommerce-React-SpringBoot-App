package com.ecommerce.controller;

import com.ecommerce.modal.Product;
import com.ecommerce.modal.Review;
import com.ecommerce.modal.User;
import com.ecommerce.request.CreateReviewRequest;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.ProductService;
import com.ecommerce.service.ReviewService;
import com.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ReviewController {

    private final ReviewService reviewService;
    private final ProductService productService;
    private final UserService userService;

    @GetMapping("/{productId}/reviews")
    public ResponseEntity<List<Review>> getReviewsByProductId(@PathVariable Long productId){
        List<Review> reviews = reviewService.getReviewByProductId(productId);
        return ResponseEntity.ok(reviews);
    }

    @PatchMapping("/{productId}/reviews")
    public ResponseEntity<Review> writeReview(@RequestBody CreateReviewRequest req,
                                              @PathVariable Long productId,
                                              @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Product product = productService.findProductById(productId);

        Review review = reviewService.createReview(req, user, product);
        return ResponseEntity.ok(review);
    }

    @PatchMapping("/reviews/{reviewId}")
    public ResponseEntity<Review> updateReview(@RequestBody CreateReviewRequest req,
                                               @PathVariable Long reviewId,
                                               @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Review review = reviewService.updateReview(
                reviewId, req.getReviewText(), req.getReviewRating(), user.getId());

        return ResponseEntity.ok(review);
    }

    @DeleteMapping("/reviews/{reviewId}")
    public ResponseEntity<ApiResponse> deleteReview(@PathVariable Long reviewId,
                                                    @RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        reviewService.deleteReview(reviewId, user.getId());

        ApiResponse apiResponse = new ApiResponse();
        apiResponse.setMessage("Review Deleted Successfully");

        return ResponseEntity.ok(apiResponse);
    }
}
