package com.ecommerce.service.impl;

import com.ecommerce.modal.Deal;
import com.ecommerce.modal.HomeCategory;
import com.ecommerce.repository.DealRepository;
import com.ecommerce.repository.HomeCategoryRepository;
import com.ecommerce.service.DealService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DealServiceImpl implements DealService {

    private final DealRepository dealRepository;
    private final HomeCategoryRepository homeCategoryRepository;

    @Override
    public List<Deal> getDeals() {
        return dealRepository.findAll();
    }

    @Override
    public Deal createDeal(Deal deal) {
        HomeCategory category = homeCategoryRepository.findById(
                deal.getCategory().getId()).orElse(null);
        Deal newDeal = dealRepository.save(deal);
        newDeal.setCategory(category);
        newDeal.setDiscount(deal.getDiscount());
        return dealRepository.save(newDeal);
    }

    @Override
    public Deal updateDeal(Deal deal, Long id) throws Exception {
        Deal existingDeal = dealRepository.findById(id).orElse(null);
        HomeCategory category = homeCategoryRepository.findById(
                deal.getCategory().getId()).orElse(null);

        if (existingDeal != null){
            if (deal.getDiscount() != null){
                existingDeal.setDiscount(deal.getDiscount());
            }
            if (category != null){
                existingDeal.setCategory(category);
            }
            return dealRepository.save(existingDeal);
        }
        throw new Exception("Deal not Found.");
    }

    @Override
    public void deleteDeal(Long id) throws Exception {
        Deal deal = dealRepository.findById(id).orElseThrow(
                () -> new Exception("Deal not Found..."));
        dealRepository.delete(deal);
    }
}
