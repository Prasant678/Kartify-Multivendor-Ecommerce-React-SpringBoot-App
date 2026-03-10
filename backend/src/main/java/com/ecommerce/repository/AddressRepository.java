package com.ecommerce.repository;

import com.ecommerce.modal.Address;
import com.ecommerce.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
