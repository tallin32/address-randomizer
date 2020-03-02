package com.example.addressrandomizer;
import lombok.Data;

@Data
public class Address {
    /**
     * The street number or other means of identifying the residence
     * I.e. "10-420"
     */
    private String house;
    /**
     * The tstreet addres, i.e. "123 Outamy Way", "1234 Broadway"
     */
    private String street;
    /**
     * The postal code for the address
     * Examples: "90125", "H0H 0H0"
     */
    private String postalCode;
    /**
     * The name of the primary locality of a place
     */
    private String city;
    /**
     * A division of a state; typically a secondary-level administrative division of a country or equivalent
     */
    private String county;
    /**\
     * A division of a country; typically a first-level administrative division of a country and/or a geographical region.  |  
     */
    private String state;
    /**
     * A code or abbreviation representing the state or other primary division of a country
     */
    private String stateCode;
    /**
     * The full name of a country
     */
    private String country;
}
