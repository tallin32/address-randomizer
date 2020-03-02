# address-randomizer
## An API that returns a randomized, human readable address in JSON format
Author: **Chris Meredith** <tallin32@gmail.com>
This service is an attempt at a Java rewrite of the TypeScript service also contained here (see ts/README.md), using SpringBoot.
To build the service:
`mvn install`
To run the service, simply run the generated .jar file in the `target` directory.  The API listens on port 8080.
* http://localhost:8080/randomizer/address - Returns a random address
* http://localhost:8080/swagger-ui.html - Gets the Swagger UI
### Known Issues
* We're light on unit tests.  This may be fixed by the time you see this.  If not, feel free to do a `git pull` and see.
* The faker used in this implementation does not attempt to fake a county.  Since addresses apparently need counties, and since no one said they had to be shipping valid, we're using Harry Potter location names. #tenPointsForSlytherin
