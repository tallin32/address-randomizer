package com.example.addressrandomizer;

import com.github.javafaker.Faker;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Locale;
import java.util.Random;

@Service
public class JavaFakerService implements RandomDataProviderService{

    public JavaFakerService() {
        this.countries = new Hashtable<Alpha3, Country>();
        this.addCountry(new Country(Alpha3.USA, "United States", "en-US"));
        this.addCountry(new Country(Alpha3.CAN, "Canada", "en-CA"));
        this.addCountry(new Country(Alpha3.MEX, "Mexico", "es-MX"));
        this.addCountry(new Country(Alpha3.NLD, "Netherlands", "nl"));
    }
    private Hashtable<Alpha3, Country> countries;
    public Address generateAddress(String country) {
        Random random= new Random();
        int n = random.nextInt(Alpha3.values().length);
Alpha3 selectedCountryCode = Alpha3.values()[n];
Country selectedCountry = this.countries.get(selectedCountryCode);
String locale = selectedCountry.getLocale();
        Faker faker = new Faker(new Locale(locale));
        Address address= new Address();
        address.setCity(faker.address().city());
        address.setCountry(selectedCountry.getName());
        // This faker has ... trouble with counties.  It was either this or beer
        address.setCounty(faker.harryPotter().location());
        address.setHouse("525");
        address.setPostalCode(  faker.address().zipCode());
        address.setState(faker.address().state());
        address.setStateCode(faker.address().stateAbbr());
        address.setStreet(faker.address().streetAddress());
        return address;
    }

    private void addCountry(Country c) {
        countries.put(c.getCode(), c);
    }
}
