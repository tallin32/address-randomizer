# address-randomizer (TypeScript)
## Return a Random Address in JSON Format
Author: **Chris Meredith** <tallin32@gmail.com>
### Build Instructions
```
npm install
npm run clean:build
npm start
```
The API listens on port 3000.
### Architecture and Dependencies
The service itself uses the following:
* [Express](https://expressjs.com/)
* [TSOA](https://github.com/lukeautry/tsoa), for TypeScript OpenAPI support
* [TSyringe](https://github.com/microsoft/tsyringe) for dependency injection
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - Generate Swagger UI from the API descriptions
* [faker.js](https://github.com/marak/Faker.js/) to generate fake address data
#### RandomizerController
Defined in src/randomizerController.ts, this file implements the `/randomizer/address` endpoint.  It uses TSyringe to instantiate a service that will provide random address data.  By default, we use FakerService (see below), but the architecture is such that anything implementing ServiceBase can be used.
One extension I added outside the spec in the TypeScript version is the ability to specify a three character country code as a `country` parameter in the query string, i.e. http://localhost:3000/randomizer/address?country=MEX
You receive a 400 error from the TSOA validation framework if you pass in an invalid country code.
#### FakerService
This is essentially a wrapper around faker.js, calling the various faker methods to generate address data.  The "@injectable" annotation tells TSyringe that this can be injected where a ServiceBase object would be used.
### Lessons Learned
The biggest lesson learned here is the state of dependency injection in TypeScript.  Where SpringBoot offers dependency injection and API definitions out of the box with very little effort, accomplishing the same in TypeScript required hunting down libraries that may or may not work well together.
For example, the TSOA dependency injection examples, which allow the use of [inversify.js](http://inversify.io/), were written using an earlier (and possibly unsupported?) version of Inversify.  Typescript-IOC, the other supported IOC framework, had no easy way to mock up a service object to use in unit testing the controller.  TypeScript's more fragmented ecosystem for this sort of thing cost a day of development time.
Lesson learned: Embrace the power of Spring Boot.  Other lesson learned: I apparently know more Java than I thought.