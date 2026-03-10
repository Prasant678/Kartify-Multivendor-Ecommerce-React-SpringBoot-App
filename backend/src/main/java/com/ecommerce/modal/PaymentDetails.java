package com.ecommerce.modal;

import com.ecommerce.domain.PaymentStatus;
import lombok.Data;

@Data
public class PaymentDetails {

    private String paymentID;

    private String razorpayPaymentLinkId;

    private String razorpayPaymentLinkReferenceId;

    private String razorpayPaymentLinkStatus;

    private String razorpayPaymentIdZWSP;

    private PaymentStatus status;
}
