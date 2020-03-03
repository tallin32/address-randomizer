package com.example.addressrandomizer;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class RandomizerControllerTests {
    @Mock RandomDataProviderService service = mock(JavaFakerService.class);
    @InjectMocks AddressController controller;
    private Address address;
    void initializeAddress() {
        this.address = new Address();
        this.address.setStateCode("CA");
        this.address.setState("California");
        this.address.setPostalCode("90125");
        this.address.setHouse("36459");
        this.address.setCounty("Rutherford");
        this.address.setCountry("United States");
        this.address.setCity("Fakersfield");
        this.address.setStreet("123 Getoutamy Way");
    }
    @Test
    void theControllerCallsWhateverServiceIsInjected() {
        this.initializeAddress();
        when(service.generateAddress(anyString())).thenReturn(this.address);
        assertTrue(controller.getAddress().getBody().equals(this.address));
    }

}
