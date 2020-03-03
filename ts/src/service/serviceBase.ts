import { Alpha3 } from "../model/country";
import { Address } from "../model/address";

export interface ServiceBase {
    generateAddress(country?: Alpha3): Promise<Address>;
}