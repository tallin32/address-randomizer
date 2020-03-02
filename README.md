# address-randomizer
## A service that returns a randomized address in human readable format
Author: **Chris Meredith** <tallin32@gmail.com>
### Repo Contents
* java/ - Implementation in Java using Spring Boot
* ts/ - Implementation in TypeScript
Each implementation also contains its own README file.  This README lists things common to both.
### API Return Value
Hitting either version of the API returns an address in the following format (copied from the Java implementation):
```
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
```
### Lessons Learned
I've stated this elsewhere, but Java and SpringBoot seem to be the far superior way to write microservices (or anything, really) that uses dependency injection.
While TypeScript has great third party libraries available for creating self-documenting APIs that generate their own Swagger specifications and make their Swagger UI available, where TypeScript fails, and where I lost a day, was looking for a framework that properly handles [dependency injection](https://en.wikipedia.org/wiki/Dependency_injection).
I think that, had I this project to do again, I would have just stuck to SpringBoot, rather than presume that TypeScript would be easier because it's what I've used over the past four years.  Coming in with near zero experience actually using SpringBoot (though a lot of our services are written with it), I was able to spin up a working demo in a day.
