import "reflect-metadata";
import * as sinon from 'sinon';
import * as sinonChai from "sinon-chai";
import * as chai from "chai";
import { FakerService } from "../src/service/fakerService";
import { Address } from "../src/model/address";
const expect = chai.expect;
const ADDRESS_KEYS = [ "house", "street", "postalCode", "city", "county", "state", "stateCode", "country", "countryCode" ];
describe("faker service", function () {
    it("throws an error if it receives an incorrect country", function () {
        let fserv = new FakerService();
        const func = fserv.generateAddress.bind(fserv);
        expect(func.call("QQQ")).to.throw;
    });

    it("returns a valid address if called without a country", function () {
        const fserv = new FakerService();
        const addr: Address = fserv.generateAddress();
        ADDRESS_KEYS.forEach((k: string) => {
            expect((addr as any)[k]).to.not.be.undefined;
        });
    });

    it("returns a complete address when called with a country, where the country is set to the expected value", function () {
        const fserv = new FakerService();
        const addr: Address = fserv.generateAddress("USA");
        expect(addr.country).to.equal("United States");
        expect(addr.countryCode).to.equal("USA");
        ADDRESS_KEYS.forEach((k: string) => {
            expect((addr as any)[k]).to.not.be.undefined;
        });
    })
});
