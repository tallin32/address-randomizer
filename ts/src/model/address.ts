/**
 * File: address.ts
 * Defines the Address data structure to be returned ty the random address API
 * Version 1.0
 */

 export interface Address {
     /**
      * House number, i.e. 123
      */
house: string;
/**
 * Street name (may also contain street number)
 * Example: "Broadway", "123 Outamy Way"
 */
street: string;
/**
 * Contains the address's postal code
 * Example: 90125, H0H-0H0
 */
postalCode: string;
/**
 * The name of the primary locality of a place
 */
city: string;
/**
 * A division of a state; typically a secondary-level administrative division of a country or equivalent
 */
county: string;
/**
 * A division of a country; typically a first-level administrative division of a country and/or a geographical region.  |  
 */
state: string;
/**
 * A code or abbreviation representing the state or other primary division of a country
 */
stateCode: string;
/**
 * The full name of a country
 * Example: "United States", "Canada"
 */
country: string;
/**
 * The ISO-3166-1 country code abbreviation
 */
countryCode: string;
 }
 