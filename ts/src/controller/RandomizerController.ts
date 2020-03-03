import { Get, Query, Route } from "tsoa";
import { ServiceBase } from "../service/serviceBase";
import { Address } from "../model/address";
import { Alpha3 } from "../model/country";
import {container, inject } from "tsyringe"

@Route("randomizer")
export class RandomizerController {
    constructor(@inject("ServiceBase") _svc?: ServiceBase) {
        this._service = _svc ? _svc : container.resolve("ServiceBase");
    }
    private _service: ServiceBase;
    @Get("address")
    public async getAddress(@Query("country") country?: Alpha3): Promise<Address> {
        try {
        return await this._service.generateAddress(country);
        } catch (e) {
            e.statusCode = 500;
            throw e;
        }
    }
}