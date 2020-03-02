package com.example.addressrandomizer;

import org.springframework.stereotype.Service;

@Service
interface RandomDataProviderService {
    public Address generateAddress(String country);
}
