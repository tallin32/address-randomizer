import "reflect-metadata";
import { RandomizerController } from "../../src/controller/RandomizerController";
import { container } from "tsyringe";
import { FakeFakerService, FakeAddress } from "../resources/fakeFakerService";
import * as chai from "chai";
const expect = chai.expect;
import { ServiceBase } from "../../src/service/serviceBase";
import { Address } from "../../src/model/address";

describe("RandomizerController", function () {
    this.beforeEach(() => {
        container.reset();
        container.register("ServiceBase", FakeFakerService);
    });

    it("Will refer to whatever service we inject into the DI container", function () {
        const ctrl: RandomizerController = new RandomizerController();
        expect(ctrl.getAddress()).to.deep.equal(FakeAddress);
    });

    it("will refer to a provider we provide as a constructor argument", function () {
        container.reset();
        const ctrl: RandomizerController = new RandomizerController(new FakeFakerService());
        expect(ctrl.getAddress()).to.deep.equal(FakeAddress);
    })
})