import { Get, Query, Route } from "tsoa";
import { ServiceBase } from "../service/serviceBase";
import { Address } from "../model/address";
import { Alpha3 } from "../model/country";
import { FakerService } from "../service/fakerService";

@Route("randomizer")
export class RandomizerController {
    @Get("address") 
    public getAddress(@Query("country") country?: Alpha3): Address {
        return new FakerService().generateAddress(country);
    }
}