package com.example.addressrandomizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressController {
    @Autowired RandomDataProviderService service;
    @GetMapping("/randomizer/address")
    public ResponseEntity<Address> getAddress() {
        Address address = service.generateAddress("dummy");
        return ResponseEntity.ok(address);
    }
}
