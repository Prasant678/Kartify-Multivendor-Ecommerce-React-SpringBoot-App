package com.ecommerce.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JWT_CONSTANT {

    public static String JWT_SECRET_KEY;

    public static final String JWT_HEADER = "Authorization";

    @Value("${jwt.secret}")
    public void setJwtSecret(String secret) {
        JWT_SECRET_KEY = secret;
    }
}