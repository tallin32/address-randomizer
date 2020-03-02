import { Alpha3 } from "../model/country";
import { Address } from "../model/address";

export class ServiceBase {
    public generateAddress(country?: Alpha3): Address {
        throw new Error("Not implemented");
    }
}