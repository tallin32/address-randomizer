import { injectable } from "tsyringe";
import { Address } from "../../src/model/address";
import { Alpha3 } from "../../src/model/country";
import { ServiceBase } from "../../src/service/serviceBase";
export const FakeAddress: Address =         {
    house: "525",
    street: "123 Getoutamy Way",
    city: "Fakersfield",
    county: "Rutherford",
    state: "California",
    stateCode: "CA",
    postalCode: "90125",
    country: "United States",
    countryCode: "USA",
};

@injectable()
export class FakeFakerService implements ServiceBase {
    public async generateAddress(country?: Alpha3): Promise<Address> {
        return Promise.resolve(FakeAddress);
    }
}
